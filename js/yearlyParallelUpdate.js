    /**  UPDATE PARALLEL YEAR CHART  **/

    function updateParallelYear(data){  
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
    } 


