(function(){
angular.module('starter').controller('OverviewController', ['$scope', '$ionicModal', '$ionicPlatform', 'BirthdayService', '$ionicScrollDelegate', '$ionicPopup', '$timeout', OverviewController]);

function OverviewController($scope, $ionicModal, $ionicPlatform, birthdayService, $ionicScrollDelegate, $ionicPopup, $timeout) {
	var vm = this;

	// Initialize the database.
	$ionicPlatform.ready(function() {
		birthdayService.initDB();

		// Get all birthday records from the database.
		birthdayService.getAllBirthdays().then(function(birthdays) {
			vm.birthdays = birthdays;
			// console.log(JSON.stringify(vm.birthdays));

		});
	});
	
	$scope.generateJson = function(){
		var data = JSON.stringify(vm.birthdays);
		var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
		window.open(url, '_blank');
		window.focus();
	}
	
	// Initialize the modal view.
	// $ionicModal.fromTemplateUrl('add-or-edit-birthday.html', {
		// scope: $scope,
		// animation: 'slide-in-up'
	// }).then(function(modal) {
		// $scope.modal = modal;
	// });
	
	vm.showAddBirthdayModal = function() {
		$scope.birthday = {};
		$scope.action = 'Add';
		$scope.isAdd = true;
		$scope.modal.show();			
	};
	
	vm.showEditBirthdayModal = function(birthday) {
		$scope.birthday = birthday;
		$scope.action = 'Edit';
		$scope.isAdd = false;			
		$scope.modal.show();
	};

	$scope.saveBirthday = function() {
		$scope.isAdd = true;
		if ($scope.isAdd) {
			birthdayService.addBirthday($scope.birthday);				
		} else {
			birthdayService.updateBirthday($scope.birthday);				
		}						
		$scope.birthday = null;
		window.location.href ="#/";
	};

	$scope.scrollMainToTop = function() {
		$ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
	};
	// $scope.deleteBirthday = function() {
		// birthdayService.deleteBirthday($scope.birthday);			
		// $scope.modal.hide();
	// };
			
	// $scope.$on('$destroy', function() {
		// $scope.modal.remove(); 
	// });

	$scope.resetMe1 = function(uName, uPhone, uEmail, uAddress1, uAddress2, uAddress3, uInstitution, uStudy, uEducation, uGradStart, uGradDate, uEduStatus, uSkills, uInstitution1, uStudy1, uEducation1, uGradStart1, uGradDate1, uEduStatus1, uSkills1){
		
		$scope.birthday=null;
			
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
	
	
	return vm;
}
})();