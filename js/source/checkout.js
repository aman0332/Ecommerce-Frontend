// var _list = [];
// var cart_data="";

// function checkonload(){
// 	var _list = JSON.parse(window.localStorage.getItem("listtostore")); // Retrieving
	
// 	document.getElementById('checkout-data').innerHTML= "";
// 	for(i=0; i<_list.length; i++){
// 		cart_data = cart_data + '<div class="row">'+
// 		'<div class="col-sm-2">'+
// 		'<img src="'+_list[i].imgSrc+'" width="80px" class="thumbnail">' +
// 		'</div>'+
// 		'<div class="col-sm-3 pt-20"><h4>'+_list[i].name+'</h4></div>'+
// 		'<div class="col-sm-2 pt-20"><b>'+_list[i].price+'</b></div>'+
// 		'<div class="col-sm-1 pt-20 red-icon"><span onclick="removecheckoutdata('+i+')" class="glyphicon glyphicon-trash">'+'</span></div>'+
// 		'</div><hr>';
// 	}
// 	document.getElementById('checkout-data').innerHTML = cart_data;

// 	var sum = 0;
// 	for(i=0; i<_list.length; i++){
// 		var _Price = _list[i].price;
// 		sum = sum + _Price;
// 	}
// 	document.getElementById('totalprice').innerHTML = sum;
// }
// console.log(_list);

// function removecheckoutdata(y){
	
// 	_list.splice(y, 1);
	
// 	var cart_data= "";
// 	document.getElementById('checkout-data').innerHTML = "";
// for(i=0; i<_list.length; i++){
// 		cart_data = cart_data + '<div class="row">'+
// 		'<div class="col-sm-2">'+
// 		'<img src="'+_list[i].imgSrc+'" width="80px" class="thumbnail">' +
// 		'</div>'+
// 		'<div class="col-sm-3 pt-20"><h4>'+_list[i].name+'</h4></div>'+
// 		'<div class="col-sm-2 pt-20"><b>'+_list[i].price+'</b></div>'+
// 		'<div class="col-sm-1 pt-20 red-icon"><span onclick="removecheckoutdata('+i+')" class="glyphicon glyphicon-trash">'+'</span></div>'+
// 		'</div><hr>';
	
// 		document.getElementById('checkout-data').innerHTML = cart_data;
// 	}
	

// 	var sum = 0;
// 	for(i=0; i<_list.length; i++){
// 		var _Price = _list[i].price;
// 		sum = sum + _Price;
// 	}
// 	document.getElementById('totalprice').innerHTML = sum;
// }



// $(document).ready(function(){



// 	$('.swalaalert').click(function(){
// 		swal("Order Placed","", "success");
// 	});

// });




