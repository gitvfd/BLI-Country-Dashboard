
    /**  SET UP BAR CHART  **/

    function barAge(){ 
      d3.csv("data/ageDistriTot.csv", function(error,data) {
        if (error) throw error;
        
        data=data.filter(function(d) {
              return(d.country == "Total")
            });

        // Parse numbers, and sort by value.
        data.forEach(function(d) { d.population = +d.population; });
        //data.sort(function(a, b) { return b.population - a.population; });
        data.move(5,0);

        // Set the scale domain.
        x.domain([0, d3.max(data, function(d) { return d.population; })]);
        y.domain(data.map(function(d) { return d.age; }));

        var bar = barAgeDistri.selectAll("g.bar")
            .data(data)
            .enter().append("g")
            .attr("class", "bar")
            .attr("transform", function(d) { return "translate(0," + y(d.age) + ")"; })
            .attr("opacity",0.5);

        bar.append("rect")
            .attr("width", function(d) { return x(d.population); })
            .attr("height", y.rangeBand());

        bar.append("text")
            .attr("class", "value")
            .attr("x", function(d) { return x(d.population)  ; })
            .attr("y", y.rangeBand() / 2)
            .attr("dx", -2)
            .attr("dy", ".35em")
            .attr("text-anchor", "end")
            .text(function(d) { return format(d.population); });

        barAgeDistri.append("g")
            .attr("class", "x axis")
            .call(xAxis);

        barAgeDistri.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        barAgeDistri.selectAll("g .bar")
          .on("mouseover",function(d,i){
            d3.select(this)
            .attr("opacity",1);

            d3.select(this)
             .select(".value")
              .attr("font-size","20px");


          })
         .on("mouseout",function(d,i){
            d3.select(this)
            .attr("opacity",.5);

            d3.select(this)
             .select(".value")
              .attr("font-size","13px");
          })
      });
    }

