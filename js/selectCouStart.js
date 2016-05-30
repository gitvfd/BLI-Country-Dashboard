function selectCouStart(){

	//if URL finishes by ISOcode-language then the site will open in the selected language for the given country if it exists example ?AUS-es will open the dashboard on Australia in Spanish
 	var URL_lang= window.location.href.slice(-6);;
	
	var lang=URL_lang.slice(-2);

	var URL=URL_lang.substring(0, 3);
	//var lang=URL_lang.substring(5,2);

	console.log(URL);
	console.log(lang);
	var couName;
	
	codeIsoMemory.forEach(function(d) {
    		if(d.ISO == URL ){
      			couName= d.country;
      			ISO=URL

        	document.cookie = 'ISO=' + ISO;
    		}   
	})

	if(couName==undefined){
			var ISO="ITA";
			var couName="Italy";
        	document.cookie = 'ISO=' + "ITA";
	}
	//To create dedicated URL for country add /?ISO at the end of the URL extract the last 3 characters that give ISO and then find corresponding name
	//var ISO="ITA";
	//var couName="Italy";

	updateData(ISO,couName)

    setTimeout(function(){
		d3.select("#bubble")
		.selectAll("circle")
	     .style("fill","#78869f");
		
		d3.select("#bubble")
			d3.selectAll(".circle."+couName.split(' ').join('.'))
	        .style("fill","#ED8074")
	        .attr("opacity",0.5);

	        d3.selectAll("#selectedCou")
	        .text(langCountryName(ISO));
	        
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

    setTimeout(function(){
    	window.lang.change(lang) ; label2update(); 
    },1000)

}