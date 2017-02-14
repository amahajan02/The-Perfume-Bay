var myApp = angular.module("mainContent", ["ngRoute"]);
myApp.controller("mainContentController", function($scope, $http) {
	$scope.menCollection = [];
	$http.get("js/data.json").then(function(data) {
		$scope.menCollection = 	data;
	}, function(data, status, headers, config, statusText) {
		console.log(data);
		console.log(status);
		console.log(statusText);
	});
	$scope.test = "Ashima";
	$scope.highlight = function() {
		$scope.highlightStyle = {border: "2px solid black !important", background: "red"};
	};
	$scope.showDetails = function(details) {
		$scope.details = details;
		console.log('details:' + details.name);
	};
});
// myApp.directive("contentDircetive")
myApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider.
	when("/home", {
		templateUrl: "views/home.html"
	}).
	when("/women", {
		templateUrl: "views/women.html"
	}).
	when("/men", {
		template: '<div class="container">' + 
					'<div class="row">' +
						'<div ng-repeat="menPerfume in menCollection" class="col-sm-4">' + 
							'<div class="mensCollection" ng-mouseover="highlight()" ng-style="highlightStyle">' +
								'<a href="#details" ng-click="showDetails(menPerfume)">' +
									'<img src="../public/img/{{menPerfume.img}}"></img>' +
								'</a>' +
								'<p>{{menPerfume.price | currencyInRupee }}</p>' +
							'</div>' +
						'</div>' +
					'</div>' + 
				'</div>'
	}).
	when("/brands", {
		templateUrl: "views/brands.html"
	}).
	when("/offers", {
		templateUrl: "views/offers.html"
	}).
	when("/details", {
		template: '<div>' + 
					'<div>{{details.name}}</div>' +
					'<img ng-src="../public/img/{{details.img}}" />' + 
					'<div>{{details.price}}</div>' +
				'</div>'
	});
}]);

myApp.filter("currencyInRupee", function() {
	return function(value) {
		// return "₹ " + value;
		return "Rs " + value;
	};
})