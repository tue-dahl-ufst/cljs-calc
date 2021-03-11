(ns my-project.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(def screen (r/atom 0))
(def memory (r/atom nil))
(def opt (r/atom nil))
(def precision (r/atom 0))
(def memory-precision (r/atom 0))
(def memories (r/atom {}))
(def new-number? (r/atom true))
(def history (r/atom []))
(def opt-to-symbol
  {/ "/", + "+", - "-", * "*"})

(defn clear []
  (reset! screen 0)
  (reset! memory nil)
  (reset! opt nil)
  (reset! precision 0)
  (reset! memory-precision 0)
  (reset! new-number? true))

(defn evaluate []
  (let [result (@opt @memory @screen)]
    (swap! history 
           #(conj % (str (.toFixed @memory (max 0 (dec @memory-precision))) " " 
                         (opt-to-symbol @opt) " " 
                         (.toFixed @screen (max 0 (dec @precision))) " = " 
                         (.toFixed result (max 0 (dec @memory-precision)
                                               (dec @precision))))))
    (reset! screen result)
    (swap! precision (partial max @memory-precision))
    (reset! memory nil)
    (reset! memory-precision 0)
    (reset! opt nil)
    (reset! new-number? true)))

(defn operator-handler [opt-arg]
  "Returns a function that handles input operator $opt-arg."
  (fn []
    (when (not @new-number?) ;; does nothing if we expect new number
      (when (not (= @opt nil)) ;; if there is a pending operation, do it
        (let [result (@opt @memory @screen)]
          (swap! history 
                 #(conj % (str (.toFixed @memory (max 0 (dec @memory-precision))) " " 
                               (opt-to-symbol @opt) " " 
                               (.toFixed @screen (max 0 (dec @precision))) " = " 
                               (.toFixed result (max 0 (dec @memory-precision)
                                                     (dec @precision))))))
          (reset! screen result)
          (swap! precision (partial max @memory-precision))
          (reset! memory nil)
          (reset! memory-precision 0)))
      (reset! opt opt-arg) ;; no matter what record new operation
      (reset! new-number? true)))) ;; expect a number after this
(defn number-handler [d]
  "Returns a function that handles input number $d."
  (fn []
    (if @new-number? ;; either we expect a new number
      (do (reset! memory @screen)
          (reset! memory-precision @precision)
          (reset! screen d)
          (reset! precision 0)
          (reset! new-number? false))
      (if (> @precision 0) ;; or we build on what is already there
        (do (swap! screen (fn [x] (+ x (/ d (Math/pow 10 @precision)))))
            (swap! precision inc))
        (swap! screen (fn [x] (+ (* 10 x) d)))))))
(defn memory-handler [key]
  "Returns a function that handles saving and recalling from register $key."
  (fn []
    (if (= (@memories key) nil)
      (swap! memories #(assoc % key @screen))
      (reset! screen (@memories key)))))

(defn operator-btn [opt-arg opt-symbol]
  [:td [:input
        {:type "button" :value opt-symbol :on-click (operator-handler opt-arg)}]])
(defn number-btn [d]
  [:td [:input 
        {:type "button" :value d :on-click (number-handler d)}]])

(defn calc-app []
  [:html
   [:table {:border "1"}
     [:tbody
      [:tr
       [:td {:colspan "3"} [:input#result {:readonly "" :type "text"
                                           :value (.toFixed @screen (max 0 (dec @precision)))}]]
       [:td [:input {:type "button" :value "c" :on-click clear}]]]
      [:tr
       (for [d (range 1 4)] (number-btn d))
       (operator-btn / "/")]
      [:tr
       (for [d (range 4 7)] (number-btn d))
       (operator-btn - "-")]
      [:tr
       (for [d (range 7 10)] (number-btn d))
       (operator-btn + "+")]
      [:tr
       [:td [:input {:type "button" :value "." 
                     :on-click #(swap! precision (fn [x] (if (> x 0) x 1)))}]]
       (number-btn 0)
       [:td [:input {:type "button" :value "=" :on-click evaluate}]]
       (operator-btn * "*")]
      [:tr [:input {:type "button" :value "MEM" :on-click (memory-handler :mem1)}]]
      ]]
   [:ul
    (for [string @history]
      [:li string])]
   ]
  )

(defn ^:export run []
      (rdom/render [calc-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))
