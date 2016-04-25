    /// SPIDER CHART ///
    function spiderChart(ISO,couName){
          ////////////////////////////////////////////////////////////// 
          //////////////////////// Set-Up ////////////////////////////// 
          ////////////////////////////////////////////////////////////// 
          var margin = {top: 50, right: 50, bottom: 100, left: 50},
            width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
            height = Math.min(300, window.innerHeight - margin.top - margin.bottom - 20);



            d3.csv("data/preferencesTot.csv",  function(error, spiderData) {
              if (error) throw error;

              spiderTot = spiderData.filter(function(d) {
                   return(d.country == "Total")
              }); 
              spiderCou = spiderData.filter(function(d) {
                   return(d.country == ISO)
              }); 

            ////////////////////////////////////////////////////////////// 
            ////////////////////////// Data ////////////////////////////// 
            ////////////////////////////////////////////////////////////// 
            var data = [
                  [//Total
                  {axis:"Civic Engagement",value:spiderTot[6].value},
                  {axis:"Community",value:spiderTot[3].value},
                  {axis:"Education",value:spiderTot[4].value},
                  {axis:"Environment",value:spiderTot[5].value},
                  {axis:"Health",value:spiderTot[7].value},
                  {axis:"Housing",value:spiderTot[0].value},
                  {axis:"Income",value:spiderTot[1].value},
                  {axis:"Life Satisfaction",value:spiderTot[8].value},
                  {axis:"Jobs",value:spiderTot[2].value}  ,
                  {axis:"Safety",value:spiderTot[9].value}  ,
                  {axis:"Work-Life Balance",value:spiderTot[10].value}        
                  ],[//countryX
                  {axis:"Civic Engagement",value:spiderCou[6].value},
                  {axis:"Community",value:spiderCou[3].value},
                  {axis:"Education",value:spiderCou[4].value},
                  {axis:"Environment",value:spiderCou[5].value},
                  {axis:"Health",value:spiderCou[7].value},
                  {axis:"Housing",value:spiderCou[0].value},
                  {axis:"Income",value:spiderCou[1].value},
                  {axis:"Life Satisfaction",value:spiderCou[8].value},
                  {axis:"Jobs",value:spiderCou[2].value}  ,
                  {axis:"Safety",value:spiderCou[9].value}  ,
                  {axis:"Work-Life Balance",value:spiderCou[10].value}        
                  ]
                ];
            ////////////////////////////////////////////////////////////// 
            //////////////////// Draw the Chart ////////////////////////// 
            ////////////////////////////////////////////////////////////// 
            var color = d3.scale.ordinal()
              .range(["#ED8074","#4CEBE8"]);
              
            var radarChartOptions = {
              w: width,
              h: height,
              margin: margin,
              //maxValue: 0.5,
              levels: 5,
              roundStrokes: true,
              color: color
            };
            //Call function to draw the Radar chart
            ;
            //console.log(couName)
            RadarChart(".radarChart", data, radarChartOptions,couName);       
          });
      }
