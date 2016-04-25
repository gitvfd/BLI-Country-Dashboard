
      function drawAge(d) {
        return line(dimensionsAge.map(function(dimension) {
          return [xParAge(dimension.name), dimension.scale(d[dimension.name])];
        }));
      }