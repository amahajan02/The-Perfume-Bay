var myApp = angular.module("mainContent", ["ngRoute"]);
myApp.controller("mainContentController", function($scope) {
	$scope.menCollection = [{
		img: 'MenCollection/1.jpeg',
		url: '#details',
		price: '3000',
		name: 'Jaguar Classic',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/2.jpeg',
		url: '#details',
		price: '2600',
		name: 'Jaguar Classic Black',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/3.jpeg',
		url: '#details',
		price: '3450',
		name: 'Gucci Pour Homme',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/4.jpeg',
		url: '#details',
		price: '7500',
		name: 'Chrome Legend',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/5.jpeg',
		url: '#details',
		price: '4150',
		name: 'Skin Titan Verge',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/6.jpeg',
		url: '#details',
		price: '1895',
		name: 'Voyage d\'Hermes',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/7.jpeg',
		url: '#details',
		price: '4450',
		name: '212 VIP Men',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/8.jpeg',
		url: '#details',
		price: '5100',
		name: 'Kouros Yves Saint Laurent',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/9.jpeg',
		url: '#details',
		price: '5200',
		name: '1 Million Paco Rabanne',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/10.jpeg',
		url: '#details',
		price: '6600',
		name: 'Gucci Guilty',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/11.jpeg',
		url: '#details',
		price: '4600',
		name: 'Boss Orange',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/12.jpeg',
		url: '#details',
		price: '4700',
		name: 'Calvin Klein Eternity Aqua',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/13.jpeg',
		url: '#details',
		price: '4050',
		name: 'Burberry',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/14.jpeg',
		url: '#details',
		price: '7800',
		name: 'Hugo by Hugo Boss',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}, {
		img: 'MenCollection/15.jpeg',
		url: '#details',
		price: '8000',
		name: 'Versace Pour Homme',
		quantity: '100ml',
		ratings: '10',
		reviews: [{
			rating: 6,
			body: 'Love it!!!',
			author: 'ashima.mahajan02@gmail.com'
		}, {
			rating: 8,
			body: 'Amazing smell!!!',
			author: 'kiran.mahajan1965@gmail.com'
		}]
	}];
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