    /**  UPDATE PARALLEL YEAR CHART  **/

    function updateParallelYear(data,dataYear){  

        dimensions.forEach(function(dimension) {
          dimension.scale.domain(dimension.type === "number"
              ? d3.extent(data, function(d) { return +d[dimension.name]; })
              : data.map(function(d) { return d[dimension.name]; }).sort());
        });

        parallelYearChart.selectAll("g .background path")
            .data(data)
            .attr("d", draw);

        parallelYearChart.selectAll("g .foreground path")
            .data(data)
            .attr("d", draw)
             .style("stroke", function(d) { return colorParallel(d.variable); });;


        dimension.selectAll("g .axis.parallel")
            .each(function(d) { d3.select(this).call(yAxisPar.scale(d.scale)); })

        parallelYearChart.selectAll(".nbrUsers1")
            .text(dataYear[0][2011] + " users"); 

        parallelYearChart.selectAll(".nbrUsers2")
            .text(dataYear[0][2012] + " users"); 

        parallelYearChart.selectAll(".nbrUsers3")
            .text(dataYear[0][2013] + " users"); 

        parallelYearChart.selectAll(".nbrUsers4")
            .text(dataYear[0][2014] + " users");             

        parallelYearChart.selectAll(".nbrUsers5")
            .text(dataYear[0][2015] + " users");  

        parallelYearChart.selectAll(".nbrUsers6")
            .text(dataYear[0][2016] + " users"); 

    } 


