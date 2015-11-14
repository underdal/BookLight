'use strict';

bookLightApp.service('AuthService',
	['$rootScope', '$location', '$cookies', function($rootScope, $location, $cookies){
		$rootScope.$on('$routeChangeStart', function(){
			console.log("HALLOO");
			 var logedIn = $cookies.get('user');
			 if(logedIn === undefined){
			 	$location.path('/welcome');
			 }
		});


//bookLightApp.service('AuthService',
//	['$http', function($http){

		this.isAuthenticated = function(){
			//check if authenticated User.isAuth() == true;
			return true;
		};

	
}]); 

/*.run(function ($rootScope, AUTH_EVENTS, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event, next) {
    var authorizedRoles = next.data.authorizedRoles;
    if (!AuthService.isAuthorized(authorizedRoles)) {
      event.preventDefault();
      if (AuthService.isAuthenticated()) {
        // user is not allowed
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      } else {
        // user is not logged in
        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
      }
    }
  });
})
*/