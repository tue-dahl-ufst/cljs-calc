(ns my-project.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(def screen (r/atom 0))
(def memory (r/atom nil))
(def opt (r/atom nil))
(def new-number? (r/atom true))
(def precision (r/atom 0))

(defn reset []
  (reset! memory nil)
  (reset! screen 0)
  (reset! opt nil)
  (reset! new-number? true)
  (reset! precision 0))

(defn evaluate []
  (reset! screen (@opt @memory @screen))
  (reset! memory nil)
  (reset! opt nil)
  (reset! new-number? true)
  (reset! precision 0))

(defn opt-run [opt-arg]
  (if (= @opt nil)
    (do (reset! memory @screen)
        (reset! opt opt-arg)
        (reset! new-number? true)
        (reset! precision 0))
    (do (reset! screen (@opt @memory @screen))
        (reset! memory @screen)
        (reset! opt opt-arg)
        (reset! new-number? true)
        (reset! precision 0))))

(defn number-btn [d]
  [:td [:input 
        {:type "button" :value d :on-click
         #(if @new-number?
            (do (reset! screen d)
                (reset! new-number? false))
            (if (> @precision 0)
              (do (swap! screen (fn [x] (+ x (/ d (Math/pow 10 @precision)))))
                  (swap! precision inc))
              (swap! screen (fn [x] (+ (* 10 x) d)))))}]])

(defn operator-btn [opt-arg opt-symbol]
  [:td [:input
        {:type "button" :value opt-symbol :on-click #(opt-run opt-arg)}]])

(defn calc-app []
  [:table {:border "1"}
   [:tbody
    [:tr
     [:td {:colspan "3"} [:input#result {:readonly "" :type "text" :value (str @screen)}]]
     [:td {:colspan "3"} [:input#result {:readonly "" :type "text" 
                                         :value (or @memory "nil")}]]
     [:td {:colspan "3"} [:input#result {:readonly "" :type "text" 
                                         :value (or @precision "nil")}]]
     [:td [:input {:type "button" :value "c" :on-click reset}]]]
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
     [:td [:input {:type "button" :value "." :on-click #(reset! precision 1)}]]
     (number-btn 0)
     [:td [:input {:type "button" :value "=" :on-click evaluate}]]
     (operator-btn * "*")]]]
  )

(defn ^:export run []
      (rdom/render [calc-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))

(defn add [a b]
      (+ a b))

(defn foo [x y]
      (list y x))
