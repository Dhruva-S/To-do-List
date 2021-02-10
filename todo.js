
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

function get(item){
var items;

	if(localStorage.getItem(item)===null){
		items=[];
	}
	else {
		items=JSON.parse(localStorage.getItem(item));
	}
	//items.push(todo);
	//localStorage.setItem("'item'",JSON.stringify(items));
	return items;
}

/*
function addtodonelist(item){
var items;

	if(localStorage.getItem('done')===null){
		items=[];
	}
	else {
		items=JSON.parse(localStorage.getItem("done"));
	}
	items.push(item);
	localStorage.setItem("done",JSON.stringify(items));
	
}
*/

function removefromlocalstorage(index,type){
	var items;
	//alert(type);
		items=JSON.parse(localStorage.getItem(type));

		if(items!==null)
		items.splice(index,1);

	localStorage.setItem(type,JSON.stringify(items));
}

function saveitems(todo){
	var items;

	//reloads the page
//	location.reload();

	if(localStorage.getItem('undone')===null){
		items=[];
	}
	else {
		items=JSON.parse(localStorage.getItem("undone"));
	}
	items.push(todo);
	localStorage.setItem("undone",JSON.stringify(items));
	return items;
}

function addtodonelist(item){
var items;

	if(localStorage.getItem("done")===null){
		items=[];
	}
	else {
		items=JSON.parse(localStorage.getItem("done"));
	}
	items.push(item);
	localStorage.setItem("done",JSON.stringify(items));

	
	
}



// AngularJS Module -----

var app=angular.module("a", []);

app.controller("b", function($scope){
	$scope.f1=[];
$scope.item=[];
//$scope.f2=[];
	$scope.display=function(){
		$scope.list=get($scope.f1);
	}
	
/* Function for adding items */
	$scope.additem=function(){
		
	$scope.list=saveitems($scope.x);
	$scope.f1="undone";
	//if ($scope.x.indexOf($scope.x) == -1) {
	//$scope.list.push($scope.x);
//}
}

/* function for deleting items */
$scope.removeitem=function(x){
	removefromlocalstorage(x,$scope.f1);
	$scope.list.splice(x,1);

}

$scope.finishedtask=function(x){
	$scope.item=$scope.list[x];

	if($scope.f1=="undone"){
addtodonelist($scope.item);
removefromlocalstorage(x,"undone");
$scope.list.splice(x,1);
}

}

});


//---------------------------------------End of Angular JS Module--------------------------------------------->
