(defproject ulam "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha3"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [criterium "0.4.3"]
                 [io.aviso/pretty "0.1.12"]
                 [com.taoensso/timbre "3.3.1"]
                 [org.clojure/math.numeric-tower "0.0.4"]]
  :plugins [[lein-cljsbuild "1.0.3"]]
  :cljsbuild {
    :builds [{:id "ulam"
              :source-paths ["src"]
              :compiler {
                :output-to "ulam.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]}
  :main ^:skip-aot ulam.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
