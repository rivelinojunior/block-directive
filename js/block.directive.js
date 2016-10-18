(function(){
  'use strict';

  angular
    .module('sgpp')
    .directive('sgppBlock', SGPPBlock);

     /** @ngInject */
    function SGPPBlock($filter) {
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
