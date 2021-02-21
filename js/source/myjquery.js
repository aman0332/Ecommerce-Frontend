

var product = [	{"imgSrc":"../images/mob2.jpg",
	"name":"MICROMAX Q417",
	"price":6999,
	"sec":"mob"},

	{"imgSrc":"../images/mob3.jpg",
	"name":"MICROMAX Spark 2",
	"price":3499,
	"sec":"mob"},

	{"imgSrc":"../images/mob1.png",
	"name":"INTEX Cloud Q11",
	"price":3999,
	"sec":"mob"},

	{"imgSrc":"../images/mob4.jpg",
	"name":"MOTOROLA Moto X",
	"price":10999,
	"sec":"mob"},

	{"imgSrc":"../images/mob5.jpg",
	"name":"SAMSUNG Galaxy J2",
	"price":9490,
	"sec":"mob"},

	{"imgSrc":"../images/ca-shirt.jpg",
	"name":"FLYING MACHINE Shirt",
	"price":999,
	"sec":"men"},

	{"imgSrc":"../images/m-jeans.jpg",
	"name":"WROGN Men's Jeans",
	"price":1499,
	"sec":"men"},

	{"imgSrc":"../images/tshirt.jpg",
	"name":"ROADSTER Men's T-shirt",
	"price":699,
	"sec":"men"},

	{"imgSrc":"../images/watch.jpg",
	"name":"TIMEX Wrist Watch",
	"price":2999,
	"sec":"men"},

	{"imgSrc":"../images/jacket.jpg",
	"name":"TEAKWOOD Jacket",
	"price":5999,
	"sec":"men"},

	{"imgSrc":"../images/top.jpg",
	"name":"LOKOMOTIVE Top",
	"price":399,
	"sec":"women"},

	{"imgSrc":"../images/la-jeans.jpg",
	"name":"DJ&C Women's Jeans",
	"price":1999,
	"sec":"women"},

	{"imgSrc":"../images/la-sw-shirt.jpg",
	"name":"ROADSTER Sweat Shirt",
	"price":999,
	"sec":"women"},

	{"imgSrc":"../images/la-suit.jpg",
	"name":"LA FIRANGI Suit",
	"price":1299,
	"sec":"women"},

	{"imgSrc":"../images/dresss.jpg",
	"name":"EAVEN Women's Dress",
	"price":1599,
	"sec":"women"},

	{"imgSrc":"../images/jacket-new.jpg",
	"name":"TEAKWOOD Jacket",
	"price":5199,
	"sec":"mix"},

	{"imgSrc":"../images/craft.jpg",
	"name":"eCRAFTINDIA Showpiece",
	"price":2499,
	"sec":"mix"},

	{"imgSrc":"../images/sws-2.jpg",
	"name":"BELLE FILLE Sweatshirt",
	"price":999,
	"sec":"mix"},

	{"imgSrc":"../images/cup.jpg",
	"name":"EXCLUSIVELANE Mugs",
	"price":1149,
	"sec":"mix"},

	{"imgSrc":"../images/jeans-loko.jpg",
	"name":"LOKOMOTIVE Jeans",
	"price":1319,
	"sec":"mix"},

	];

function mydata(){
for (var i = 0 ; i < product.length ; i++){
	if (product[i].sec == "mob") {
		var mobile = document.getElementById('dealofday').innerHTML;
		mobile = mobile + 			'<div class="col-md-2">'+
		'<div class="card-1" data-toggle="modal" data-target="#modal'+i+'">'+
		'<img src="'+product[i].imgSrc+'" class="dod">'+
		'<h4>'+ product[i].name +'</h4>'+
		'<h5 class="price">Price:'+product[i].price+'</h5>'+
		'<div class="rate-container">'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-g"></i>'+
		'</div>'+
		'</div>'+

		'<div class="modal fade" id="modal'+i+'" role="dialog">'+
		'<div class="modal-dialog modal-lg">'+


		'<div class="modal-content">'+
		'<div class="modal-header">'+
		'<button type="button" class="close" data-dismiss="modal">x</button>'+
		'</div>'+
		'<div class="modal-body">'+
		'<div class="row">'+
		'<div class="col-md-5">'+
		'<img src="'+product[i].imgSrc+'" class="img-men">'+
		'</div>'+
		'<div class="col-md-7 text-left"><br>'+
		'<h3>'+ product[i].name +'</h3>'+
		'<h5>Price:'+product[i].price+'</h5>'+
		'<div class="rate-container">'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-g"></i>'+
		'</div>'+
		'<h5><b>Product Details</b></h5>'+
		'<h6>Meet the all-new Moto M. Crafted in all-metal, this stylish smartphone will keep you up-to-date in fashion and technology. Powered by MTK Helio P15 64-bit Processor and 3050 mAh battery, the Moto M keeps you going all day long</h6>'+
		'<h5><b>Features</b></h5>'+
		'<h6>4 GB RAM | 64 GB ROM | Expandable Upto 128 GB</h6>'+
		'<h6>5.5 inch Full HD Display</h6>'+
		'<h6>16MP Primary Camera | 8MP Front</h6>'+
		'<h6>3050 mAh Li-Polymer Battery</h6>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'<div class="modal-footer">'+
		'<button type="button" class="btn btn-primary clickthebutton" id="mybutton'+i+'" data-dismiss="modal">Add to Cart</button>'+
		'<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>';

		document.getElementById('dealofday').innerHTML = mobile;
	}

	else if(product[i].sec == "men"){
		var menfashion = document.getElementById('mensection').innerHTML;
		menfashion = menfashion + 			'<div class="col-md-2">'+
		'<div class="card-1" data-toggle="modal" data-target="#modal'+i+'">'+
		'<img src="'+product[i].imgSrc+'" class="dod">'+
		'<h4>'+ product[i].name +'</h4>'+
		'<h5 class="price">Price:'+product[i].price+'</h5>'+
		'<div class="rate-container">'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-g"></i>'+
		'</div>'+
		'</div>'+

		'<div class="modal fade" id="modal'+i+'" role="dialog">'+
		'<div class="modal-dialog modal-lg">'+


		'<div class="modal-content">'+
		'<div class="modal-header">'+
		'<button type="button" class="close" data-dismiss="modal">x</button>'+
		'</div>'+
		'<div class="modal-body">'+
		'<div class="row">'+
		'<div class="col-md-5">'+
		'<img src="'+product[i].imgSrc+'" class="img-men">'+
		'</div>'+
		'<div class="col-md-7 text-left"><br>'+
		'<h3>'+ product[i].name +'</h3>'+
		'<h5>Price:'+product[i].price+'</h5>'+
		'<div class="rate-container">'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-g"></i>'+
		'</div>'+
		'<h5>Select Size'+ 
		'<button class="btn mar-3">S</button>'+
		'<button class="btn mar-3">M</button>'+
		'<button class="btn mar-3">L</button>'+
		'<button class="btn mar-3">XL</button>'+
		'</h5><br>'+
		'<h5><b>Product Details</b></h5>'+
		'<h6>Olive green jacket, has a stand collar, a full zip closure, long sleeves, two pockets, ribbed hem</h6>'+
		'<h5><b>Material & Care</b></h5>'+
		'<h6>Shell: 55% PU, 45% cotton</h6>'+
		'<h6>Lining: 100% polyester</h6>'+
		'<h6>Dry-clean</h6>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'<div class="modal-footer">'+
		'<button type="button" class="btn btn-primary clickthebutton" id="mybutton'+i+'" data-dismiss="modal">Add to Cart</button>'+
		'<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>';

		document.getElementById('mensection').innerHTML = menfashion;
	}
	else if(product[i].sec == "women"){
		var womenfashion = document.getElementById('womensection').innerHTML;
		womenfashion = womenfashion + 			'<div class="col-md-2">'+
		'<div class="card-1" data-toggle="modal" data-target="#modal'+i+'">'+
		'<img src="'+product[i].imgSrc+'" class="dod">'+
		'<h4>'+ product[i].name +'</h4>'+
		'<h5 class="price">Price:'+product[i].price+'</h5>'+
		'<div class="rate-container">'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-g"></i>'+
		'</div>'+
		'</div>'+

		'<div class="modal fade" id="modal'+i+'" role="dialog">'+
		'<div class="modal-dialog modal-lg">'+


		'<div class="modal-content">'+
		'<div class="modal-header">'+
		'<button type="button" class="close" data-dismiss="modal">x</button>'+
		'</div>'+
		'<div class="modal-body">'+
		'<div class="row">'+
		'<div class="col-md-5">'+
		'<img src="'+product[i].imgSrc+'" class="img-men">'+
		'</div>'+
		'<div class="col-md-7 text-left"><br>'+
		'<h3>'+ product[i].name +'</h3>'+
		'<h5>Price:'+product[i].price+'</h5>'+
		'<div class="rate-container">'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-g"></i>'+
		'</div>'+
		'<h5>Select Size'+ 
		'<button class="btn mar-3">S</button>'+
		'<button class="btn mar-3">M</button>'+
		'<button class="btn mar-3">L</button>'+
		'<button class="btn mar-3">XL</button>'+
		'</h5><br>'+
		'<h5><b>Product Details</b></h5>'+
		'<h6>Olive green jacket, has a stand collar, a full zip closure, long sleeves, two pockets, ribbed hem</h6>'+
		'<h5><b>Material & Care</b></h5>'+
		'<h6>Shell: 55% PU, 45% cotton</h6>'+
		'<h6>Lining: 100% polyester</h6>'+
		'<h6>Dry-clean</h6>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'<div class="modal-footer">'+
		'<button type="button" class="btn btn-primary clickthebutton" id="mybutton'+i+'" data-dismiss="modal">Add to Cart</button>'+
		'<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>';

		document.getElementById('womensection').innerHTML = womenfashion;
	}
	else if(product[i].sec == "mix"){
		var recent = document.getElementById('recentsearch').innerHTML;
		recent = recent + 			'<div class="col-md-2">'+
		'<div class="card-1" data-toggle="modal" data-target="#modal'+i+'">'+
		'<img src="'+product[i].imgSrc+'" class="dod">'+
		'<h4>'+ product[i].name +'</h4>'+
		'<h5 class="price">Price:'+product[i].price+'</h5>'+
		'<div class="rate-container">'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-g"></i>'+
		'</div>'+
		'</div>'+

		'<div class="modal fade" id="modal'+i+'" role="dialog">'+
		'<div class="modal-dialog modal-lg">'+


		'<div class="modal-content">'+
		'<div class="modal-header">'+
		'<button type="button" class="close" data-dismiss="modal">x</button>'+
		'</div>'+
		'<div class="modal-body">'+
		'<div class="row">'+
		'<div class="col-md-5">'+
		'<img src="'+product[i].imgSrc+'" class="img-men">'+
		'</div>'+
		'<div class="col-md-7 text-left"><br>'+
		'<h3>'+ product[i].name +'</h3>'+
		'<h5>Price:'+product[i].price+'</h5>'+
		'<div class="rate-container">'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-y"></i>'+
		'<i class="fa fa-star star-g"></i>'+
		'</div>'+
		'<h5>Select Size'+ 
		'<button class="btn mar-3">S</button>'+
		'<button class="btn mar-3">M</button>'+
		'<button class="btn mar-3">L</button>'+
		'<button class="btn mar-3">XL</button>'+
		'</h5><br>'+
		'<h5><b>Product Details</b></h5>'+
		'<h6>Olive green jacket, has a stand collar, a full zip closure, long sleeves, two pockets, ribbed hem</h6>'+
		'<h5><b>Material & Care</b></h5>'+
		'<h6>Shell: 55% PU, 45% cotton</h6>'+
		'<h6>Lining: 100% polyester</h6>'+
		'<h6>Dry-clean</h6>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'<div class="modal-footer">'+
		'<button type="button" class="btn btn-primary clickthebutton" id="mybutton'+i+'" data-dismiss="modal">Add to Cart</button>'+
		'<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>';

		document.getElementById('recentsearch').innerHTML = recent;
	}
	else{}
}
}


var list = [];

function remove(x){
	list.splice(x, 1);

	var cartdata = '';
	
	document.getElementById('badge-data').innerHTML = "";
	if(list.length>0){
		
		for(i=0; i<list.length; i++){
			cartdata = cartdata + '<div class="row">'+
			'<div class="col-xs-3">'+
			'<img src="'+list[i].imgSrc+'" class="thumbnail hoverme" width="40px;">'+
			'</div>'+
			'<div class="col-xs-7 pt-10"><h6><b>'+list[i].name+'</b></h6></div>'+
			'<div class="col-xs-1 pt-10 red-icon">'+ '<span onclick="remove('+i+')" class="glyphicon glyphicon-trash">'+'</span></div>'+
			'</div>';
		}
		document.getElementById('popover_content').innerHTML = cartdata;
		document.getElementById('badge-data').innerHTML = list.length;
	}
	else{
		document.getElementById('popover_content').innerHTML=" <h4>Your cart is emopty</h4><img class='img-responsive' src='../images/shopping_cart.png'> ";
		
	}
}
$('.clickme').click(function(){

	window.location.href = "../templates/checkout.html";
	window.localStorage.setItem("listtostore", JSON.stringify(list)); // Saving
	
});




function checkonload(){
	var cart_data="";
	list = JSON.parse(window.localStorage.getItem("listtostore")); // Retrieving
	
	document.getElementById('checkout-data').innerHTML= "";
	for(i=0; i<list.length; i++){
		cart_data = cart_data + '<div class="row">'+
		'<div class="col-sm-2 col-xs-4">'+
		'<img src="'+list[i].imgSrc+'" width="80px" class="thumbnail">' +
		'</div>'+
		'<div class="col-sm-3 col-xs-4 pt-12"><h4>'+list[i].name+'</h4></div>'+
		'<div class="col-sm-2 col-xs-2 pt-20"><b>'+list[i].price+'</b></div>'+
		'<div class="col-sm-1 col-xs-2 pt-20 red-icon"><span onclick="removecheckoutdata('+i+')" class="glyphicon glyphicon-trash">'+'</span></div>'+
		'</div><hr>';
	}
	document.getElementById('checkout-data').innerHTML = cart_data;

	var sum = 0;
	for(i=0; i<list.length; i++){
		var _Price = list[i].price;
		sum = sum + _Price;
	}
	document.getElementById('totalprice').innerHTML = sum;
}

function removecheckoutdata(y){
	list.splice(y, 1);
	
	var cart_data= "";
	document.getElementById('checkout-data').innerHTML = "";
for(i=0; i<list.length; i++){
		cart_data = cart_data + '<div class="row">'+
		'<div class="col-sm-2 col-xs-4">'+
		'<img src="'+list[i].imgSrc+'" width="80px" class="thumbnail">' +
		'</div>'+
		'<div class="col-sm-3 col-xs-4 pt-12"><h4>'+list[i].name+'</h4></div>'+
		'<div class="col-sm-2 col-xs-2 pt-20"><b>'+list[i].price+'</b></div>'+
		'<div class="col-sm-1 col-xs-2 pt-20 red-icon"><span onclick="removecheckoutdata('+i+')" class="glyphicon glyphicon-trash">'+'</span></div>'+
		'</div><hr>';	
	}
	document.getElementById('checkout-data').innerHTML = cart_data;
	
	var sum = 0;
	for(i=0; i<list.length; i++){
		var _Price = list[i].price;
		sum = sum + _Price;
	}
	document.getElementById('totalprice').innerHTML = sum;
}

$(document).ready(function(){

	$('button.mar-3').click( function() {
    $(this).addClass('active').siblings().removeClass('active');
    $(this).css({"background-color" : "#337ab7", "color" : "white"}).siblings().css({"background-color" : "lightgrey", "color" : "black"});
  });


	


// list = [];
// function addtocart(){
// 	list.push(product[i]);
// 	console.log(list);
// }




$('.tab-btn').click(function(){
	$('.tab-content').addClass('hidden');
	var target = $(this).attr('target');
	var selector = "#div"+target;
	$(selector).removeClass('hidden');
});
$('.tab-btn1').click(function(){
	$('.tab-content1').addClass('hidden');
	var target = $(this).attr('target1');
	var selector = "#1div"+target;
	$(selector).removeClass('hidden');
});


$('.clickthebutton').click(function(){
	var FindID = $(this).attr('id');
	var LastValue = FindID.substr(8);
	var FindObject = product[LastValue];
	list.push(FindObject);
	swal("Item Added","Please continue shopping","success"); 
	document.getElementById('badge-data').innerHTML = list.length;
});	



$('.showCart').click(function(){
	var cartdata = '';
	document.getElementById('popover_content').innerHTML = " ";
	if(list.length>0){
		for(i=0; i<list.length; i++){
			cartdata = cartdata + '<div class="row">'+
			'<div class="col-xs-3">'+
			'<img src="'+list[i].imgSrc+'" class="thumbnail hoverme" width="40px;">'+
			'</div>'+
			'<div class="col-xs-7 pt-10"><h6><b>'+list[i].name+'</b></h6></div>'+
			'<div class="col-xs-1 pt-10 red-icon">'+ '<span onclick="remove('+i+')" class="glyphicon glyphicon-trash">'+'</span></div>'+
			'</div>';
			document.getElementById('popover_content').innerHTML = cartdata;
		}
		
	}
	else{
		document.getElementById('popover_content').innerHTML=" <p>Your cart is empty</p><img class='img-responsive' src='../images/shopping_cart.png'> ";
	}
});


	$('.swalaalert').click(function(){
		setTimeout(function(){ window.location.href = "../templates/landing - Copy (2).html";  }, 2000);
		swal("Order Placed","", "success");	
	});
});



