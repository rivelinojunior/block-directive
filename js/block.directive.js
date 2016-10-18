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
          disabled: true
        };
        
        if(attrs.blockDisable){
          angular.extend(options, angular.fromJson(attrs.blockDisable));
        }
        
        if(options.elements && options.elements.length){
          angular.forEach(options.elements, function(e) { disableElement(element.find(e)) });
        }
        else {
          var defaultElements = ['input','textarea','select','button'];
          angular.forEach(defaultElements, function(e) { disableElement(element.find(e)) });
        }
        
        function disableElement(target) {
          angular.forEach(target, function(e){ 
            angular.element(e).attr('ng-disabled', options.disabled); 
          });
        }
      }
    }
})();
