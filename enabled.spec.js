
describe('boolean attr directives', function() {
  var element;

  beforeEach(module('btford.enabled'))

  it('should bind to disabled', inject(function($rootScope, $compile) {
    element = $compile('<button ng-enabled="isEnabled">Button</button>')($rootScope);
    $rootScope.isEnabled = false;
    $rootScope.$digest();
    expect(element.attr('disabled')).toBeTruthy();
    $rootScope.isEnabled = true;
    $rootScope.$digest();
    expect(element.attr('disabled')).toBeFalsy();
  }));

});
