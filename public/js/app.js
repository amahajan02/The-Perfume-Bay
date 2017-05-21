var myApp = angular.module("mainContent", ["ngRoute"]);
myApp.controller("mainContentController", function($scope, $http) {
	$scope.menCollection = [];
	$http.get("./js/data.json").then(function(data) {
		$scope.menCollection = 	data.data;
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
		console.log('details:' + details.availableSizes);
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
		templateUrl: "views/men.html"
	}).
	when("/brands", {
		templateUrl: "views/brands.html"
	}).
	when("/offers", {
		templateUrl: "views/offers.html"
	}).
	when("/details", {
		templateUrl: "views/details.html"
	});
}]);

myApp.filter("currencyInRupee", function() {
	return function(value) {
		// return "₹ " + value;
		return "Rs " + value;
	};
})