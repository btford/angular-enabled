module.exports = function(config){
  config.set({
  basePath : './',

  files : [
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'enabled.js',
    'enabled.spec.js'
  ],

  autoWatch : true,

  frameworks: ['jasmine'],

  browsers : ['Chrome'],
})}