

      /**  UPDATE DATA WHEN CHANGE IN DROPDOWN**/
      function updateData(codeISO,couName){
        var dataGender =genderDistriTotMemory.filter(function(d){return d.country==codeISO});
        updateDonutGender(dataGender);


        var dataAge =ageDistriTotMemory.filter(function(d){return d.country==codeISO});
        updateBarAge(dataAge);


        var dataYear =yearParallelTotMemory.filter(function(d){return d.country==codeISO});
        updateParallelYear(dataYear);


        var dataAgePar =ageParallelTotMemory.filter(function(d){return d.country==codeISO});
        updateParallelAge(dataAgePar);

        var dataGenderPar =genderParallelTotMemory.filter(function(d){return d.country==codeISO});
        updateParallelGender(dataGenderPar);
        
        //wordleChart(codeISO);
        updateSquareChart(codeISO)
        spiderChart(codeISO,couName);
      };