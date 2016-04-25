
    /**  UPDATE PARALLEL GENDER CHART  **/

    function updateParallelGender(data){  
        dimensionsGender.forEach(function(dimension) {
          dimension.scale.domain(dimension.type === "number"
              ? d3.extent(data, function(d) { return +d[dimension.name]; })
              : data.map(function(d) { return d[dimension.name]; }).sort());
        });

        parallelGenderChart.selectAll("g .background path")
            .data(data)
            .attr("d", drawGender);

        parallelGenderChart.selectAll("g .foreground path")
            .data(data)
            .attr("d", drawGender)
             .style("stroke", function(d) { return colorParallel(d.variable); });;


        dimension.selectAll("g .axis.parallel")
            .each(function(d) { d3.select(this).call(yAxisPar.scale(d.scale)); })
    } 