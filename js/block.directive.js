(function(){
  'use strict';

  angular
    .module('riverjr.block-disable')
    .directive('blockDisable', BlockDisable);

     /** @ngInject */
    function BlockDisable($filter) {
      var ddo = {
        restrict: 'A',
        scope: {},
        compile: compile
      };

      return ddo;

      function compile(element, attrs) {
        var options = angular.fromJson(attrs['sgppBlockOptions']);

        angular.forEach(options.elements, function(value) {
          var children = element.find(value);
          children.attr('ng-disabled', 'true');
        });
      }
    }
})();
