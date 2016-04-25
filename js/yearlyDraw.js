      function draw(d) {
        return line(dimensions.map(function(dimension) {
          return [xPar(dimension.name), dimension.scale(d[dimension.name])];
        }));
      }