
      function drawGender(d) {
        return line(dimensionsGender.map(function(dimension) {
          return [xParGender(dimension.name), dimension.scale(d[dimension.name])];
        }));
      }


