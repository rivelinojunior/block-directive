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
        var options = angular.fromJson(attrs['sgppBlockOptions']);

        angular.forEach(options.elements, function(value) {
          var children = element.find(value);
          children.attr('ng-disabled', 'true');
        });
      }
    }
})();
