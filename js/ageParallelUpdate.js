    /**  UPDATE PARALLEL AGE CHART  **/

    function updateParallelAge(data){  
        dimensionsAge.forEach(function(dimension) {
          dimension.scale.domain(dimension.type === "number"
              ? d3.extent(data, function(d) { return +d[dimension.name]; })
              : data.map(function(d) { return d[dimension.name]; }).sort());
        });

        parallelAgeChart.selectAll("g .background path")
            .data(data)
            .attr("d", drawAge);

        parallelAgeChart.selectAll("g .foreground path")
            .data(data)
            .attr("d", drawAge)
             .style("stroke", function(d) { return colorParallel(d.variable); });;


        dimension.selectAll("g .axis.parallel")
            .each(function(d) { d3.select(this).call(yAxisPar.scale(d.scale)); })
    } 
