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

        parallelYearChart.selectAll("#nbrUsers1")
            .text(langYearParallel(dataYear[0][2011])); 

        parallelYearChart.selectAll("#nbrUsers2")
            .text(langYearParallel(dataYear[0][2012])); 

        parallelYearChart.selectAll("#nbrUsers3")
            .text(langYearParallel(dataYear[0][2013])); 

        parallelYearChart.selectAll("#nbrUsers4")
            .text(langYearParallel(dataYear[0][2014]));             

        parallelYearChart.selectAll("#nbrUsers5")
            .text(langYearParallel(dataYear[0][2015]));  

        parallelYearChart.selectAll("#nbrUsers6")
            .text(langYearParallel(dataYear[0][2016])); 

    } 


