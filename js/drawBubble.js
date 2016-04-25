function drawBubble(){

var mobileScreen = ($( window ).innerWidth() < 500 ? true : false);
var width = document.getElementById('bubble').offsetWidth;
var height = mobileScreen ? 280 : 360;

var bubbleFrame = d3.select("#bubble").append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform","translate(1,1)");

var format = d3.format(",d");

var pack = d3.layout.pack()
    .sort(null)
    .size([width - 2, height - 2])
    .value(function(d){ return d.population * d.population; })
    .padding(3);



var couName = bubbleFrame.append("text")
   .attr("class", "countryName")
      .attr("x", 0.1*width)
      .attr("y", height-35)
      .attr("font-size","20px");

var popTot = bubbleFrame.append("text")
   .attr("class", "popTot")
      .attr("x", 0.1*width)
      .attr("y", height- 10)
      .attr("font-size","20px");


d3.csv("data/distriTot.csv", type, function(error, dataTemp) {
  if (error) throw error;
  data2=dataTemp.filter(function(d){ return d.population > 1000; })

  data=data2.filter(function(d){ return d.country != "Total"; })

  createDataSet(data);

});

function createDataSet(dataTemp){
  var test=[];
  var temp;
  d3.csv("data/codeIso.csv", function(error, countryCode) {
        dataTemp.forEach(function(d) {
          countryCode.forEach(function(k) {
            if(d.country == k.ISO ){
              temp = k.country;
            }   
          }); 
          test.push({ISO:d.country,population:d.population,country:temp}) 
      });

  drawBubbles(test)
  return test;
  });
}

function drawBubbles(data){
    bubbleFrame.selectAll("text")
      .data(pack.nodes({children: data}))
      .enter()
      .append("text")
      .attr("class", "bubble")
      .attr("x", function(d) { return d.x; })
      .attr("y", function(d) { return d.y; })   
      //.attr("font-family", "sans-serif")
      .attr("font-size", function(d) {  return Math.pow(d.r,0.8)+"px"; })
      .text(function(d) { return d.ISO; });

  bubbleFrame.selectAll("circle")
      .data(pack.nodes({children: data}).slice(1))
      .enter()
      .append("circle")
      .attr("class", function(d) { return "circle " + d.country; })
      .attr("r", function(d) { return d.r; })
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("opacity",0.5)
      .on("mouseover", function(d){
        d3.selectAll("circle."+d.country.split(' ').join('.'))
        .style("opacity",0.2);;

        d3.selectAll(".countryName")
        .text(d.country);

        d3.selectAll(".popTot")
        .text(format(d.population));
      })
      .on("mouseout", function(d){
        d3.selectAll(".circle."+d.country.split(' ').join('.'))
        .style("opacity",0.5);
        
        d3.selectAll(".countryName")
        .text("");

        d3.selectAll(".popTot")
        .text("");
      } )
      .on("click",function(d){
        d3.selectAll("circle")
        .style("fill","#78869f");

        d3.selectAll(".circle."+d.country.split(' ').join('.'))
        .style("fill","#ED8074")
        .attr("opacity",0.5);

        d3.selectAll("#selectedCou")
        .text(d.country);
        
        d3.selectAll("#numberAnswerSelection")
        .text(d.population);
        
        d3.selectAll("#couToUpdate")
        .text(d.country);

		/**d3.select("#spiderPref")
			.selectAll("#couToUpdate")
        	.text(d.country);**/

		/**var url = "http://somelink.com/link.php?id1=" + d.name +
                      "?id2=" + (d.parent ? d.parent.name : "");
          $(location).attr('href', url);
          window.location = url;**/

	    /**var fileName = name.replace(/ /g, "_");
	    
	    var flowerPath = "flower_pics/"+d.ISO+".png"
	    document.getElementById("couFlower").src = flowerPath;**/
        updateData(d.ISO,d.country)

      });



}

function type(d) {
  return (d.population = +d.population) ? d : null;
}
  
/**function getName(ISOrequested){
  d3.csv("../Dashboard/data/codeISO.csv", function(error, countryCode) {
      var bubbleName;
      countryCode.forEach(function(d) {
        if(ISOrequested == d.ISO ){
          bubbleName = d.country;
        }
      });
      return bubbleName;
  });
}**/
}
