
$(document).ready(function(){
    $("#button").click(function(){
        $("#start").hide();
    });
    $("#cancel").click(function(){
        $("#start").show();
    });
});


var bool = 0;


var Region = [["Oxfam", "Save The Children"],["Doctors without Borders", "Human Appeal", "UNHCR", "IFRC"],["WFO", "WHO", "UN Development Fund", "Against Malaria"]]
var Asia = Region[0];
var MiddleEast = Region[1];
var Africa = Region[2];


var Type = [["Doctors without Borders", "Save The Children", "WHO", "Against Malaria"],["Oxfam", "WFO", "UN Development Fund"],["Human Appeal", "IFRC"]]
var HealthCare = Type[0];
var BasicNeeds = Region[1];
var EmergencyRelief = Region[2];


function showByType(Type){
	var names = ["Health Care", "Basic Needs", "Emergency Relief"];
	for(i = 0; i < Type.length; i++){
		var type = document.createElement("h3");
		type.style.color = "rgb(252, 255, 252)";
		type.style.fontWeight = "bold";
		var node = document.createTextNode(names[i]);
		type.appendChild(node);
		var div = document.getElementById("modal-content");
		div.appendChild(type);
		type.className = "remove col-md-12 text-center";
		for(j = 0; j < Type[i].length; j++){
			var org = document.createElement("h4");
			var name = document.createTextNode(Type[i][j]);
			org.appendChild(name);
			var div1 = document.getElementById("modal-content");
			div1.appendChild(org);
			org.className = "remove result col-md-12 text-center checkbox";
			
		}
	}
}

var elem = document.getElementById("type");
var box = document.getElementById("box");
elem.addEventListener('click', function(){showByType(Type); box.style.top = 0;}, false);


function showByRegion(Region){
	var names = ["Asia", "Middle East", "Africa"];
	for(i = 0; i < Region.length; i++){
		var region = document.createElement("h3");
		region.style.color = "rgb(252, 255, 252)";
		region.style.fontWeight = "bold";
		var node = document.createTextNode(names[i]);
		region.appendChild(node);
		var div = document.getElementById("modal-content");
		div.appendChild(region);
		region.className = "remove col-md-12 text-center";
		for(j = 0; j < Type[i].length; j++){
			var org = document.createElement("h4");
			var name = document.createTextNode(Type[i][j]);
			org.appendChild(name);
			var div1 = document.getElementById("modal-content");
			div1.appendChild(org);
			org.className = "remove result col-md-12 text-center checkbox";
		}
	}
}

var elem2 = document.getElementById("region");
var box2 = document.getElementById("box");
elem2.addEventListener('click', function(){showByRegion(Region); box2.style.top = 0;}, false);


$(".searches").click(function(){
     $(this).css("background-color", "rgb(40, 58, 89)");
});

$("body").on("click", ".result", function(event){
    $(this).css("background-color", "rgb(40, 58, 89)");
	$(this).addClass("selected");
	$("#next").css("visibility", "visible");
});

$("#next").click(function(){
    $(".remove").css("visibility", "hidden");
	$("#money").css("display", "block");
	if(bool == 1){
		$(this).submit();
	}
	bool ++;
});




