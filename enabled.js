angular.module('btford.enabled', []).directive('ngEnabled', function() {
  return {
    priority: 100,
    link: function(scope, element, attr) {
      scope.$watch(attr.ngEnabled, function (value) {
        attr.$set('disabled', !value);
      });
    }
  };
});
