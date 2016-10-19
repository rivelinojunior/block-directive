(function(){
  'use strict';

  angular
    .module('riverjr.blockdisable', [])
    .directive('blockDisable', BlockDisable);

    function BlockDisable($compile) {
      var directive = {
        restrict: 'A',
        scope: {
          hide: '<bdHide',
          disable: '<bdDisable'
        },
        compile: compile
      };

      return directive;

      function compile(element, attrs) {
        var elements = ['input','textarea','select','button'];
        
        if(attrs.blockDisable) {
          elements = angular.fromJson(attrs.blockDisable);
        }
        
        angular.forEach(elements, function(e) { 
          var target = element.find(e);
          disableElement(target);
          hideElement(target); 
        });
             
        function disableElement(target) {
          target.attr('ng-disabled', 'disable');
        }

        function hideElement(target) {
          target.attr('ng-hide', 'hide');
        }
        
        return function postLink(scope) {
          angular.forEach(elements, function(e) { 
            var target = element.find(e);
            $compile(target)(scope);
          });
        }
      }
    }
})();
