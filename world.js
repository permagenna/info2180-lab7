


window.onload = function(){
	setUpEvents();
};

function setUpEvents (){
	/* global $ */

	$(document).ready(function(){
	    
	    $("#lookup").on('click',function(){
	        
	        var x =$("#country").val(); 
	        
	       if($("#true").is(":checked")){
	           lookupAll();
	       }else{
	           lookup(x);
	       }
	    });

	function lookupAll(){
	    var url= 'world.php';
	    
	    $.ajax(url,{
	        method: 'GET',
	    }).done(function(resol){
	        $("#result").html(resol);
	    }).fail(function(fail){
	        $("#result").html('Error!!');
	     });
	}
	    
	    function lookup(query){
	        var url='world.php?country='+query;
	         $.ajax(url,{
	             method: 'GET',
	    }).done(function(resol){
	        $("#result").html(resol);
	        
	    }).fail(function(fail){
	        $("#result").html('ERROR!!');
	    });
	    }
	});

}