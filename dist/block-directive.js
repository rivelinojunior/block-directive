(function(){
  'use strict';

  angular
    .module('riverjr.blockdisable', [])
    .directive('blockDisable', BlockDisable);

    function BlockDisable() {
      var directive = {
        restrict: 'A',
        compile: compile
      };

      return directive;

      function compile(element, attrs) {
        var options = {
          disable: true,
          hide: false,
          elements: ['input','textarea','select','button']
        };
        
        if(attrs.blockDisable) {
          angular.extend(options, angular.fromJson(attrs.blockDisable));
          angular.forEach(options.elements, function(e) { 
            var target = element.find(e);
            disableElement(target);
            hideElement(target); 
          });
        }
             
        function disableElement(target) {
          target.attr('ng-disabled', options.disable);
        }

        function hideElement(target) {
          target.attr('ng-hide', options.hide);
        }
      }
    }
})();
