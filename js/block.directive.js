(function(){
  'use strict';

  angular
    .module('riverjr.block-disable')
    .directive('blockDisable', BlockDisable);

    function BlockDisable() {
      var directive = {
        restrict: 'A',
        scope: {},
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
