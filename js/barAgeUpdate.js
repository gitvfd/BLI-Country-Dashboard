
    /**  UPDATE BAR CHART  **/
    function updateBarAge(test){
        data = [{age :"<15",population:""},{age:"15-24",population:""},{age:"25-34",population:""},{age:"35-44",population:""},{age:"45-54",population:""},{age:"55-64",population:""},{age:">65",population:""}]


        data.forEach(function(d) { 
            test.forEach(function(k) { 
              if(d.age === k.age)
                d.population = k.population;
            });
         });


        data.forEach(function(d) { d.population = +d.population; });
        //data.move(5,0);

        // Set the scale domain.
        x.domain([0, d3.max(data, function(d) { return d.population; })]);
        y.domain(data.map(function(d) { return d.age; }));


        barAgeDistri.selectAll("g rect")
          .data(data)
          .transition().duration(750)
          .attr("width", function(d) { return x(d.population); })

        barAgeDistri.selectAll(".value")
          .data(data)
          .transition().duration(750)
            .attr("x", function(d) { return x(d.population) ; })
            .attr("dx", -2)
            .text(function(d) { return format(d.population); });

        barAgeDistri.selectAll(".x.axis")
            .call(xAxis);

        /**barAgeDistri.selectAll(".y.axis")
            .call(yAxis);**/

    }

