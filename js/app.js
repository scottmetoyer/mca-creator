angular.module('mca', ['mca.controllers', 'mca.directives'])

.run(function() {
  $platform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('title', {
      url: '/title',
      templateUrl: 'templates/title.html',
      controller: 'TitleCtrl'
    })

    .state('app', {
      url: "/app",
      templateUrl: "templates/app.html",
      controller: 'AppCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/title');
});
