function findMinArrowShots(points) {
  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1;
  let lastEnd = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > lastEnd) {
      arrows++;
      lastEnd = points[i][1];
    }
  }

  return arrows;
}
