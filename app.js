(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
// .controller('DontWantController', DontWantController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  var promise = MenuSearchService.getMatchedMenuItems();

  promise.then(function (response){
    //menu.menu_items = response.data;
    menu.menu_items = response.data;
  })
  .catch(function(error){
    console.log("Nothing Found!");
  });

}

// DontWantController.$inject = ['MenuSearchService'];
// function DontWantController(MenuSearchService) {
//   var DWItems = this;
//
//   DWItems.removeItem = function(itemIndex, itemName, itemSName, itemDiscr){
// 		MenuSearchService.removeItem(itemIndex, itemName, itemSName, itemDiscr);
// 	}
// }


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  var found = [];

  service.getMatchedMenuItems = function (){
    //loop data using http request
    var response = $http({
      method: "GET",
      url:("https://davids-restaurant.herokuapp.com/menu_items.json")
      //url:("http://davids-restaurant.herokuapp.com/categories.json")
    });

    return response;
    // return $http("https://davids-restaurant.herokuapp.com/menu_items.json").then(function (result) {
    //     // process result and only keep items that match
    //     var foundItems...
    //
    //     // return processed items
    //     return foundItems;
    // });
  };

  // service.removeItem = function(itemIndex, itemName, itemSName, itemDiscr){
  //   found.splice(itemIndex, 1);
  //
  //    var removed = {
  //      name:itemName,
  //      short_name: itemSName,
  //      description: itemDiscr
  //    };
  // };

}

})();
