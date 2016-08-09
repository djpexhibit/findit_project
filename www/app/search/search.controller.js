findoApp.controller('searchCtrl',function($scope,$state){
	
	$scope.submit=function(){
		$state.go('searchresults');	
	}
});


findoApp.controller('searchResultsCtrl',function($scope,$state){
	$scope.items = [
            {
                color: "#5AD863",
                icon: "ion-ionic",
                title: "Item1"
            },
            {
                color: "#5AD863",
                icon: "ion-ionic",
                title: "Item2"
            },
            {
                color: "#5AD863",
                icon: "ion-ionic",
                title: "Item3"
            },
            {
                color: "#5AD863",
                icon: "ion-ionic",
                title: "Item4"
            },
            {
                color: "#3DBEC9",
                icon: "ion-ionic",
                title: "Item5"
            },
            {
                color: "#3DBEC9",
                icon: "ion-ionic",
                title: "Item6"
            }
        ];
});