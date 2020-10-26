//a plane containing point objects
let plane = {
    name: "cartesian plane",
    origin: {
        x: 0,
        y: 0
    },
    points: [
        { x: 2, y: 4 },
        { x: 1, y: 1 },
        { x: -3, y: 2 },
        { x: 0, y: 1 }
    ],
    onAnAxis: function(x, y) {
        return x === 0 || y === 0;
    },
    distance: function(point1, point2) {
        return Math.sqrt(
            (point1.x - point2.x) ** 2 +
            (point1.y - point2.y) ** 2);
    }
};

console.log(plane);

//print out the points
for (let i = 0; i < plane.points.length; i++)
{
    console.log("(" + plane.points[i].x + ", " + plane.points[i].y + ")");
}
console.log();

for (let i = 0; i < plane.points.length; i++)
{
    let onAxis = plane.onAnAxis(plane.points[i].x, plane.points[i].y);
    if (onAxis)
    {
        console.log(plane.points[i] + " is on an axis");
    }
    else
    {
        console.log(plane.points[i] + " is not on an axis");
    }
}

