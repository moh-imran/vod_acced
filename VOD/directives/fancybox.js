
angular.module('th.Profiling').directive('fancyBox', function() {
    return {
        link: function(scope, element, attr) {
           element.fancybox({  helpers: {overlay: {locked: false,closeClick: false }},padding: 10});
        }
    };
});