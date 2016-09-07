findoApp.controller('searchCtrl',function($scope,$state, $ionicLoading, $ionicPlatform){
	
	$scope.submit=function(){
		$ionicPlatform.ready(function(){
			$ionicLoading.show({template: "Loading ..."});
			// call service
			$state.go('searchresults');
			$ionicLoading.hide();
		});
			
	}
});


findoApp.controller('searchResultsCtrl',function($scope,$state){
	$scope.items = [
            {
                color: "#ffffff",
                icon: "ion-ionic",
                title: "Car with long name",
				imgurl: "img/findo/1.jpg"
            },
            {
                color: "#ffffff",
                icon: "ion-ionic",
                title: "just a car",
				imgurl: "/img/findo/1.jpg"
            },
            {
                color: "#ffffff",
                icon: "ion-ionic",
                title: "car short",
				imgurl: "/img/findo/1.jpg"
            },
            {
                color: "#ffffff",
                icon: "ion-ionic",
                title: "Item4",
				imgurl: "/img/findo/1.jpg"
            },
            {
                color: "#fff",
                icon: "ion-ionic",
                title: "Item5",
				imgurl: "/img/findo/1.jpg"
            },
            {
                color: "#fff",
                icon: "ion-ionic",
                title: "Item6",
				imgurl: "/img/findo/1.jpg"
            }
        ];
});