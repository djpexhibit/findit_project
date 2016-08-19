
var findoApp = angular.module('findoApp', ['ionic', 'auth0', 'angular-storage', 'angular-jwt', 'ngCordova']).run(
	function ($ionicPlatform, $rootScope, auth, store, jwtHelper, $location) {
		$ionicPlatform.ready(function () {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
		});
		
		// This hooks all auth events to check everything as soon as the app starts
		auth.hookEvents();
		
		//This event gets triggered on URL change
		var refreshingToken = null;
		
		$rootScope.$on('$locationChangeStart', function () {
			
			var token = store.get('token');
			var refreshToken = store.get('refreshToken');
			
			if (token) {
				if (!jwtHelper.isTokenExpired(token)) {
					if (!auth.isAuthenticated) {
						auth.authenticate(store.get('profile'), token);
					}
				} else {
					if (refreshToken) {
						if (refreshingToken === null) {
							refreshingToken = auth.refreshIdToken(refreshToken).then(function (idToken) {
								store.set('token', idToken);
								auth.authenticate(store.get('profile'), idToken);
							}).finally(function () {
								refreshingToken = null;
							});
						}
						return refreshingToken;
					} else {
						$location.path('/login');// Notice: this url must be the one defined
					}                          // in your login state. Refer to step 5.
				}
			}
		});
	});

findoApp.config(function ($stateProvider, $urlRouterProvider, authProvider, $httpProvider, jwtInterceptorProvider) {
	
	$stateProvider
	
	// setup an abstract state for the tabs directive
	.state('home', {
		url: '/',
		templateUrl: 'app/home/home.html'
	})
		
	.state('login', { // Notice: this state name matches the loginState property value to set in authProvider.init({...}) below...
		url: '/login',
		templateUrl: 'app/account/login.html'
	})
		
	.state('link', { 
		url: '/link',
		templateUrl: 'app/account/linkAccount.html'
	})
	
	.state('search', { 
		url: '/search',
		templateUrl: 'app/search/search.html',
		controller: 'searchCtrl'
	})
	
	.state('searchresults', { 
		url: '/searchresults',
		templateUrl: 'app/search/searchresults.html',
		controller: 'searchResultsCtrl'
	})
	
	.state('item-detail', { 
		url: '/item-detail:itemId',
		templateUrl: 'app/search/itemdetail.html'
	})
	
	.state('advanced-filters', { 
		url: '/advanced-filters',
		templateUrl: 'app/search/advancedSearchFilters.html'
	});
	
	authProvider.init({
		domain: AUTH0_DOMAIN,
		clientID: AUTH0_CLIENT_ID,
		loginState: 'login'
	});
	
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/login');

});


findoApp.controller('myCtrl', function($scope, $ionicModal, $http) {
	
	$scope.data = {};
	$scope.resultsLoaded = false;
	
	$scope.submit = function(){
		
		var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
		
		$http.post(link, {username : $scope.data.username}).then(function(res){
			//$scope.response = res.data;
			$scope.response1 = 'test1';
			$scope.response2 = 'test2';
			$scope.response3 = 'test3';
			$scope.response4 = 'test4';
			$scope.response5 = 'test5';
			$scope.resultsLoaded=true;
		});
	};
});


findoApp.directive('backImg', function(){
	return function(scope, element, attrs){
		var url = attrs.backImg;
		//var content = element.find('a');
		element.css({
			'background-image': 'url(' + url +')',
			'background-size' : 'cover'
		});
	};
});
