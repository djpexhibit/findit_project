findoApp.controller('searchCtrl',function($scope,$state, $ionicLoading, $ionicPlatform){
	
	$scope.submit=function(){
		$ionicPlatform.ready(function(){
			$ionicLoading.show({template: "Loading ..."});
			$state.go('searchresults');
			$ionicLoading.hide();
		});
			
	}
});


findoApp.controller('searchResultsCtrl',function($scope,$state){
	$scope.items = [
            {
                color: "#5AD863",
                icon: "ion-ionic",
                title: "Item1",
				imgurl: "/img/findo/1.jpg"
            },
            {
                color: "#5AD863",
                icon: "ion-ionic",
                title: "Item2",
				imgurl: "/img/findo/1.jpg"
            },
            {
                color: "#5AD863",
                icon: "ion-ionic",
                title: "Item3",
				imgurl: "/img/findo/1.jpg"
            },
            {
                color: "#5AD863",
                icon: "ion-ionic",
                title: "Item4",
				imgurl: "/img/findo/1.jpg"
            },
            {
                color: "#3DBEC9",
                icon: "ion-ionic",
                title: "Item5",
				imgurl: "/img/findo/1.jpg"
            },
            {
                color: "#3DBEC9",
                icon: "ion-ionic",
                title: "Item6",
				imgurl: "/img/findo/1.jpg"
            }
        ];
});