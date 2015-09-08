angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicScrollDelegate) {
	$scope.scrollMainToTop = function() {
    $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
	$scope.data = {};
 
    $scope.login = function() {
        console.log("LOGIN user: " + $scope.data.admin + " - PW: " + $scope.data.password);
		 LoginService.loginUser($scope.data.admin, $scope.data.password).success(function(data) {
            $state.go('tab.account1');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
	
})

.controller('parseCtrl', function($scope, $ionicScrollDelegate, $ionicPopup, $timeout){
	// $scope.navTitle = '<img class="title" src="img/CEBCareerFair.png" />'; 
	$scope.savePerson = function(uName, uPhone, uEmail, uAddress1, uAddress2, uAddress3, uInstitution, uStudy, uEducation, uGradStart, uGradDate, uEduStatus, uSkills, uInstitution1, uStudy1, uEducation1, uGradStart1, uGradDate1, uEduStatus1, uSkills1){
		var PeopleObject = Parse.Object.extend("PeopleObject");
		var person = new PeopleObject();
		person.set("userName", uName);
		person.set("userPhone", uPhone);
		person.set("userEmail", uEmail);
		// person.set("userDOB", uDob);
		person.set("userAdd1", uAddress1);
		person.set("userAdd2", uAddress2);
		person.set("userAdd3", uAddress3);
		person.set("userInstitution", uInstitution);
		person.set("userAreaOfStudy", uStudy);
		person.set("userEducationLevel", uEducation);
		person.set("userGradStartDate", uGradStart);
		person.set("userGradDate", uGradDate);
		person.set("userEducationStatus", uEduStatus);
		person.set("userSkills", uSkills);
		person.set("userInstitution1", uInstitution1);
		person.set("userAreaOfStudy1", uStudy1);
		person.set("userEducationLevel1", uEducation1);
		person.set("userGradStartDate1", uGradStart1);
		person.set("userGradDate1", uGradDate1);
		person.set("userEducationStatus1", uEduStatus1);
		person.set("userSkills1", uSkills1);
		person.save(null, {});
		$scope.uName = null;
		$scope.uPhone = null;
		$scope.uEmail = null;
		// $scope.uDob = null;
		$scope.uAddress1 = null;
		$scope.uAddress2 = null;
		$scope.uAddress3 = null;
		$scope.uInstitution = null;
		$scope.uStudy = null;
		$scope.uEducation = null;
		$scope.uGradStart = null;
		$scope.uGradDate = null;
		$scope.uEduStatus = null;
		$scope.uSkills = null;
		$scope.uInstitution1 = null;
		$scope.uStudy1 = null;
		$scope.uEducation1 = null;
		$scope.uGradStart1 = null;
		$scope.uGradDate1 = null;
		$scope.uEduStatus1 = null;
		$scope.uSkills1 = null;
		
		window.location.href ="#/dash";
	}
	$scope.getPeople = function(params){
		var PeopleObject = Parse.Object.extend("PeopleObject");
		var query = new Parse.Query(PeopleObject);
		// var innerQuery = new Parse.Query(PeopleObject);
		if(params !== undefined){
			if(params.uName !== undefined){
				// innerQuery.exists("Burman");
				query.equalTo("uName", params.uName);
			}
			// if(params.firstName !== undefined){
				// query.equalTo("firstName", params.firstName);
			//}
		}
		query.find({
			success: function(results){
				alert("Successfully returned " + results.length + " people");
				for(var i = 0; i< results.length; i++){
					var object = results[i];
					console.log(object.id + " - " + object.get("userName") + " " + object.get("userPhone") + " " + object.get("userEmail") + " " + object.get("userDOB") + " " + object.get("userAdd1") + " " + object.get("userAdd2") + " " + object.get("userAdd3"));
				}
			},
			error: function(error){
				alert("Error: " + error.code + " " + error.message);
			}
		});
	}

	
	
	$scope.resetMe1 = function(uName, uPhone, uEmail, uAddress1, uAddress2, uAddress3, uInstitution, uStudy, uEducation, uGradStart, uGradDate, uEduStatus, uSkills, uInstitution1, uStudy1, uEducation1, uGradStart1, uGradDate1, uEduStatus1, uSkills1){
		$scope.uName = null;
		$scope.uPhone = null;
		$scope.uEmail = null;
		// $scope.uDob = null;
		$scope.uAddress1 = null;
		$scope.uAddress2 = null;
		$scope.uAddress3 = null;
		$scope.uInstitution = null;
		$scope.uStudy = null;
		$scope.uEducation = null;
		$scope.uGradStart = null;
		$scope.uGradDate = null;
		$scope.uEduStatus = null;
		$scope.uSkills = null;
		$scope.uInstitution1 = null;
		$scope.uStudy1 = null;
		$scope.uEducation1 = null;
		$scope.uGradStart1 = null;
		$scope.uGradDate1 = null;
		$scope.uEduStatus1 = null;
		$scope.uSkills1 = null;		
	}
	
	   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'CEB - Career Fair',
       template: 'Thank you for providing your details.'
     });
     alertPopup.then(function(res) {
       console.log('success!');
     });
   };
	
})


.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);