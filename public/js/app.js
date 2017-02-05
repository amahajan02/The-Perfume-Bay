var myApp = angular.module("mainContent", ["ngRoute"]);
myApp.controller("mainContentController", function($scope) {
	$scope.menCollection = [{
		img: 'MenCollection/1.jpeg',
		url: '#details',
		price: '3000'
	}, {
		img: 'MenCollection/2.jpeg',
		url: '#details',
		price: '2600'
	}, {
		img: 'MenCollection/3.jpeg',
		url: '#details',
		price: '3450'
	}, {
		img: 'MenCollection/4.jpeg',
		url: '#details',
		price: '7500'
	}, {
		img: 'MenCollection/5.jpeg',
		url: '#details',
		price: '4150'
	}, {
		img: 'MenCollection/6.jpeg',
		url: '#details',
		price: '1895'
	}, {
		img: 'MenCollection/7.jpeg',
		url: '#details',
		price: '4450'
	}, {
		img: 'MenCollection/8.jpeg',
		url: '#details',
		price: '5100'
	}, {
		img: 'MenCollection/9.jpeg',
		url: '#details',
		price: '5200'
	}, {
		img: 'MenCollection/10.jpeg',
		url: '#details',
		price: '6600'
	}, {
		img: 'MenCollection/11.jpeg',
		url: '#details',
		price: '4600'
	}, {
		img: 'MenCollection/12.jpeg',
		url: '#details',
		price: '4700'
	}, {
		img: 'MenCollection/13.jpeg',
		url: '#details',
		price: '4050'
	}, {
		img: 'MenCollection/14.jpeg',
		url: '#details',
		price: '7800'
	}, {
		img: 'MenCollection/15.jpeg',
		url: '#details',
		price: '8000'
	}];
	$scope.highlight = function() {
		// $scope.highlightStyle = "{border: 2px solid black !important; background: red}";
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
		template: '<div class="container"><div class="row"><div ng-repeat="menPerfume in menCollection" class="col-sm-4"><div class="mensCollection" ng-mouseover="highlight()" ng-class="highlightStyle"><a href="{{menPerfume.url}}"><img src="../public/img/{{menPerfume.img}}"></img></a><p>{{menPerfume.price | currencyInRupee }}</p></div></div></div></div>'
	}).
	when("/brands", {
		templateUrl: "views/brands.html"
	}).
	when("/offers", {
		templateUrl: "views/offers.html"
	});
}]);

myApp.filter("currencyInRupee", function() {
	return function(value) {
		// return "₹ " + value;
		return "Rs " + value;
	};
})