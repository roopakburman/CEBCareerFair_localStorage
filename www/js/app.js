var ceb = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

ceb.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
	// Parse.initialize("zn4ST8WdfLaiuEZIRTShs2U4RpOsZJ1GDDLkJLBl","JjJi0hmdgkyVx3Cz1mAZkfGtdJs6XSSrRapRAVMY");
  });
	
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'OverviewController'
      }
    }
  })
	.state('tab.dash1', {
    url: '/dash/dash1',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash1.html',
        controller: 'OverviewController'
      }
    }
  })
  .state('tab.dash2', {
    url: '/dash/dash2',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash2.html',
        controller: 'parseCtrl'
      }
    }
  })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('tab.account1', {
    url: '/account/account1',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account1.html',
        controller: 'OverviewController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
