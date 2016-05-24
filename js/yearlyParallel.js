

    /**  SET UP PARALLEL YEAR CHART  **/
    function parallelYear(){
     
      d3.csv("data/yearParallelTot.csv", function(error,data) {
      if (error) throw error;

      data=data.filter(function(d) {
                return(d.country == "Total")});

        dimensions.forEach(function(dimension) {
          dimension.scale.domain(dimension.type === "number"
              ? d3.extent(data, function(d) { return +d[dimension.name]; })
              : data.map(function(d) { return d[dimension.name]; }).sort());
        });

        parallelYearChart.append("g")
            .attr("class", "background")
          .selectAll("path")
            .data(data)
          .enter().append("path")
            .attr("d", draw);

        parallelYearChart.append("g")
            .attr("class", "foreground")
          .selectAll("path")
            .data(data)
          .enter().append("path")
            .attr("d", draw)
             .style("stroke", function(d) { return colorParallel(d.variable); });;

        dimension.append("g")
            .attr("class", "axis parallel")
            .each(function(d) { d3.select(this).call(yAxisPar.scale(d.scale)); })
          .append("text")
            .attr("class", "title")
            .attr("text-anchor", "middle")
            .attr("y", -18)
            .text(function(d) { return d.name; });

        i=0;
        
        dimension.append("g")
            .attr("class", "axis parallel")
            .each(function(d) { d3.select(this).call(yAxisPar.scale(d.scale)); })
          .append("text")
            .attr("class", function(){ 
              i++; 
              return"nbrUsers" +i ;
            })
            .attr("text-anchor", "middle")
            .attr("y",-1)
            .text();            

        var ordinal_labels = parallelYearChart.selectAll(".axis text")
            .on("mouseover", mouseover)
            .on("mouseout", mouseout);

        var projection = parallelYearChart.selectAll(".background path,.foreground path")
            .on("mouseover", mouseover)
            .on("mouseout", mouseout);

        function mouseover(d) {
          parallelYearChart.classed("active", true);
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

          d3.selectAll("#paraLineNameYear")
            .text(function(){
              if(d.variable=="Housing"){return"Housing";}
              if(d.variable=="Income"){return"Income";}
              if(d.variable=="Jobs"){return"Jobs";}
              if(d.variable=="Community"){return"Community";}
              if(d.variable=="Education"){return"Education";}
              if(d.variable=="Environment"){return"Environment";}
              if(d.variable=="CivicEngagement"){return"Civic Engagement";}
              if(d.variable=="Health"){return"Health";}
              if(d.variable=="LifeSatisfaction"){return"Life Satisfaction";}
              if(d.variable=="Safety"){return"Safety";}
              if(d.variable=="WorkLifeBalance"){return"Work-Life Balance";}
            });

          parallelYearChart.append("png:image")
            .attr("id","topicIconYear")
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
            .attr("x", 0.04*widthParallel)
            .attr("y",height-29);
        }            
        

        function mouseout(d) {
          parallelYearChart.classed("active", false);
          projection.classed("inactive", false);
          ordinal_labels.classed("inactive", false);

          d3.selectAll("#paraLineNameYear")
            .text("");

          d3.selectAll("#topicIconYear")
            .remove();  
        
        }

        function moveToFront() {
          this.parentNode.appendChild(this);
        }
      });    
    }
