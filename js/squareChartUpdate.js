
    /**  UPDATE SQUARE CHART  **/
    function updateSquareChart(codeISO){
              svg.selectAll("rect.selectedCou")
                //.attr("class","selectedCou")
                .remove();

      d3.csv("data/distriTot.csv", function(error, data) {

        if (error) throw error;

        data=data.filter(function(d) {
                return(d.country == codeISO || d.country == "Total" )});
         

        var valueCou=data[0].population

        if (data[0].country=="Total"){
          var valuePop=data[0].population;
        }else{
          var valuePop=data[1].population;
        }
        //calculate then umber of cubes created
        var cubeTot = widthSquare/5*heightSquare/5;

        //Calculate how many cubes a country represents by a rule of 3
        var cubeCou=valueCou*cubeTot/valuePop;
        var counter=0;
        
        if (data[0].country=="Total"){
          for(i=0;i<widthSquare;i=i+5){
            for(j=0;j<heightSquare;j=j+5){
                  svg.append("rect")
                  .attr("class","selectedCou")
                  .attr("x",i)
                  .attr("y",j)
                  .attr("width",5)
                  .attr("height",5)
                  .attr("fill","#ED8074")
                  .attr("opacity",0.5)
                  .attr("stroke-width",1)
                  .attr("stroke", "#FFF");
              }
            }
          
        }else{
         //draw the cubes

          for(i=0;i<widthSquare;i=i+5){
            for(j=0;j<heightSquare;j=j+5){
              if(counter<=cubeCou){
                svg.append("rect")
                .attr("class","selectedCou")
                .attr("x",i)
                .attr("y",j)
                .attr("width",5)
                .attr("height",5)
                .attr("fill","#ED8074")
                .attr("opacity",0.35)
                .attr("stroke-width",1)
                .attr("stroke", "#FFF");
                counter++;
              }
            }
          }
        }
      });
    }