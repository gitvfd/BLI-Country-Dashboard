    /**  UPDATE DONUT CHART  **/

    function updateDonutGender(data){
        donutGenderDist.selectAll("g .arc path")
          .data(pie(data))
            //.transition().duration(750)
            .attr("d", arc);

       

        donutGenderDist.selectAll("g  .arc text")
            .data(pie(data))
            .transition().duration(750)
            .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("dy", "2em")
            //.attr("fill","#fff")
            .text(function(d) {  return  format(d.data.population); });
    }