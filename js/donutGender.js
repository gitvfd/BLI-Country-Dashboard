
    /**  SET UP DONUT CHART  **/

    function donutGender(){

      d3.csv("data/genderDistriTot.csv", type, function(error, data) {
        if (error) throw error;
      data=data.filter(function(d) {
                return(d.country == "Total")});

        var g=donutGenderDist.selectAll(".arc")
            .data(pie(data))
          .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.gender); })
            .attr("opacity",0.5);

       /**g.append("text")
            .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .attr("fill","#fff")
            .text(function(d) { 
              if(d.data.gender =="f")
                return "Women" ;

              if(d.data.gender =="m")
                return "Men" ;
            });**/

        g.append("text")
            .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("dy", "2em")
            //.attr("fill","#fff")
            .text(function(d) { return  format(d.data.population); });
        

        /////////////////////////////////////////////////////////
        /////////////////// Draw legend Function /////////////////////
        /////////////////////////////////////////////////////////

        donutGenderDist.append("rect")
          .attr("x",10 - widthPie/2 )
          .attr("y",20-height/2)
          .attr("height",20)
          .attr("width",20)
          .attr("fill","#4CEBE8")
          .attr("opacity",0.5);
       donutGenderDist.append("text")
          .attr("id","donutMen")
          .attr("x",35 - widthPie/2 )
          .attr("y",35-height/2)
          .text(langGender("Men"));

        donutGenderDist.append("rect")
          .attr("x",10 - widthPie/2  )
          .attr("y",50-height/2)
          .attr("height",20)
          .attr("width",20)
          .attr("fill","#ED8074")
          .attr("opacity",0.5);
        donutGenderDist.append("text")
          .attr("id","donutWomen")
          .attr("x",35 - widthPie/2 )
          .attr("y",65-height/2)
          .text(langGender("Women"));


         donutGenderDist.selectAll("path")
            .on("mouseover",function(d,i){
              d3.select(this)
              .attr("opacity", 1);

              d3.select(this)
               .select("text")
                .attr("font-size","20px");


            })
           .on("mouseout",function(d,i){
              d3.select(this)
                .attr("opacity",0.5);

              d3.select(this)
               .select("text")
                .attr("font-size","13px");
            })

      });

      function type(d) {
        d.population = +d.population;
        return d;
      }   
    }