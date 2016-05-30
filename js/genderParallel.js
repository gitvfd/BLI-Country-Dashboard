
    /**  SET UP PARALLEL GENDER CHART  **/

    function parallelGender(){

      d3.csv("data/genderParallelTot.csv", function(error,data) {

        if (error) throw error;
        data=data.filter(function(d) {
                  return(d.country == "Total")});

        dimensionsGender.forEach(function(dimension) {
          dimension.scale.domain(dimension.type === "number"
              ? d3.extent(data, function(d) { return +d[dimension.name]; })
              : data.map(function(d) { return d[dimension.name]; }).sort());
        });

        parallelGenderChart.append("g")
            .attr("class", "background")
          .selectAll("path")
            .data(data)
          .enter().append("path")
            .attr("d", drawGender);

        parallelGenderChart.append("g")
            .attr("class", "foreground")
          .selectAll("path")
            .data(data)
          .enter().append("path")
            .attr("d", drawGender)
             .style("stroke", function(d) { return colorParallel(d.variable); });;

        dimensionGender.append("g")
            .attr("class", "axis parallel")
            .each(function(d) { d3.select(this).call(yAxis.scale(d.scale)); })
          .append("text")
            .attr("class", "title")
            .attr("text-anchor", "middle")
            .attr("y", -9)
            .text(function(d) { return langGender(d.name); });

        var ordinal_labels = parallelGenderChart.selectAll(".axis text")
            .on("mouseover", mouseover)
            .on("mouseout", mouseout);

        var projection = parallelGenderChart.selectAll(".background path,.foreground path")
            .on("mouseover", mouseover)
            .on("mouseout", mouseout);

        function mouseover(d) {
          parallelGenderChart.classed("active", true);
          if (typeof d === "string") {
            projection.classed("inactive", function(p) { return p.name !== d; });
            projection.filter(function(p) { return p.name === d; }).each(moveToFront);
            ordinal_labels.classed("inactive", function(p) { return p !== d; });
            ordinal_labels.filter(function(p) { return p === d; }).each(moveToFront);
          } else {
            projection.classed("inactive", function(p) { return p !== d; });
            projection.filter(function(p) { return p === d; }).each(moveToFront);
            ordinal_labels.classed("inactive", function(p) { return p !== d.name; });
            ordinal_labels.filter(function(p) { return p === d.name; }).each(moveToFront);
          }

          d3.selectAll("#paraLineNameGender")
            .text(langTopicName(d.variable));

          parallelGenderChart.append("png:image")
            .attr("id","topicIconGender")
            .attr("xlink:href", function(){
              if(d.variable=="Housing"){return"img/Housing.png";}
              if(d.variable=="Income"){return"img/Income.png";}
              if(d.variable=="Jobs"){return"img/Jobs.png";}
              if(d.variable=="Community"){return"img/Community.png";}
              if(d.variable=="Education"){return"img/Education.png";}
              if(d.variable=="Environment"){return"img/Environment.png";}
              if(d.variable=="CivicEngagement"){return"img/CivicEngagement.png";}
              if(d.variable=="Health"){return"img/Health.png";}
              if(d.variable=="LifeSatisfaction"){return"img/LifeSatisfaction.png";}
              if(d.variable=="Safety"){return"img/Safety.png";}
              if(d.variable=="WorkLifeBalance"){return"img/WorkLifeBalance.png";}
            })
            .attr("width", 30)
            .attr("height", 30)
            .attr("x", 0.025*widthParallelGender)
            .attr("y",height-29);
        }

        function mouseout(d) {
          parallelGenderChart.classed("active", false);
          projection.classed("inactive", false);
          ordinal_labels.classed("inactive", false);

          d3.selectAll("#paraLineNameGender")
            .text("");

          d3.selectAll("#topicIconGender")
            .remove();  
        }

        function moveToFront() {
          this.parentNode.appendChild(this);
        }
      });

    }
