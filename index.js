/*
 * @name: index.js
 * @description: 
 * @author: wondger@gmail.com
 * @date: 2013-11-22
 * @param: 
 * @todo: 
 * @changelog: 
 */
(function(){
    var pi = function(v) {return window.parseInt(v, 10)},
        pf = function(v) {return window.parseFloat(v, 10)};

    window.anole = anole = {};

    anole.math = {
        to: function(v, from, to) {
            return to ? pi(pi(v).toString(from)).toString(to) : pi(v).toString(to);
        }
    }
})();
