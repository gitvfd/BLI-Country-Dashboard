function selectCouStart(){
 	var URL= window.location.href.slice(-3);;
	
	var couName;
	codeIsoMemory.forEach(function(d) {
    		if(d.ISO == URL ){
      			couName= d.country;
      			ISO=URL
    		}   
	})

	if(couName==undefined){
			var ISO="ITA";
			var couName="Italy";
	}
	//To create dedicated URL for country add /?ISO at the end of the URL extract the last 3 characters that give ISO and then find corresponding name
	//var ISO="ITA";
	//var couName="Italy";

	updateData(ISO,couName)
console.log(couName)
console.log(ISO)

    setTimeout(function(){
		d3.select("#bubble")
		.selectAll("circle")
	     .style("fill","#78869f");
		
		d3.select("#bubble")
			d3.selectAll(".circle."+couName.split(' ').join('.'))
	        .style("fill","#ED8074")
	        .attr("opacity",0.5);

	        d3.selectAll("#selectedCou")
	        .text(couName);
	        
	        d3.selectAll("#numberAnswerSelection")
	        .text(function(){
	        	var temp
	        	distriTotMemory.forEach(function(d) {
	            		if(d.country == ISO ){
	              			temp= d.population;
	            		}   
	        	})
	        	return temp;
	        });

	        d3.selectAll("#couToUpdate")
	        .text(couName);
        },500)

}