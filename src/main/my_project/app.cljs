(ns my-project.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(def screen (r/atom 0))
(def memory (r/atom nil))
(def opt (r/atom nil))
(def precision (r/atom 0))
(def memory-precision (r/atom 0))

(defn clear []
  (reset! screen 0)
  (reset! memory nil)
  (reset! opt nil)
  (reset! precision 0)
  (reset! memory-precision 0))

(defn evaluate []
  (reset! screen (@opt @memory @screen))
  (reset! memory nil)
  (reset! opt nil)
  (reset! precision (max @precision @memory-precision))
  (reset! memory-precision 0))

(defn operator-handler [opt-arg]
  "Returns a function that handles input operator $opt-arg."
  (fn []
    (cond (= @opt nil) (reset! opt opt-arg)
          (= @memory nil) nil
          :else (do (reset! screen (@opt @memory @screen))
                    (swap! precision (partial max @memory-precision))
                    (reset! memory nil)
                    (reset! opt opt-arg)))))

(defn number-handler [d]
  "Returns a function that handles input number $d."
  (fn []
    (cond (and (= @memory nil) @opt) (do (reset! memory @screen)
                                         (reset! memory-precision @precision)
                                         (reset! screen d)
                                         (reset! precision 0))
          ;; (and (= @memory nil) (= @opt nil)) (do (reset! screen d)
          ;;                                        (reset! precision 0)
          ;;                                        (if (> @precision 0)
          ;;                                          (do (swap! screen (fn [x] (+ x (/ d (Math/pow 10 @precision)))))
          ;;                                              (swap! precision inc))
          ;;                                          (swap! screen (fn [x] (+ (* 10 x) d)))))
          :else (if (> @precision 0)
                  (do (swap! screen (fn [x] (+ x (/ d (Math/pow 10 @precision)))))
                      (swap! precision inc))
                  (swap! screen (fn [x] (+ (* 10 x) d)))))))

(defn operator-btn [opt-arg opt-symbol]
  [:td [:input
        {:type "button" :value opt-symbol :on-click (operator-handler opt-arg)}]])
(defn number-btn [d]
  [:td [:input 
        {:type "button" :value d :on-click (number-handler d)}]])

(defn calc-app []
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
     (operator-btn * "*")]]]
  )

(defn ^:export run []
      (rdom/render [calc-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))
