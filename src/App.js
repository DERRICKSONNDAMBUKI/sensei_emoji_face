import { arc, path } from "d3";


const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 30;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 20
const mouthRadius = 140

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius+mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

function App() {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        <circle
          r="245"
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
        />
        <circle r={eyeRadius} cx={-eyeOffsetX} cy={-eyeOffsetY} />
        <circle r={eyeRadius} cx={eyeOffsetX} cy={-eyeOffsetY} />
        <path d={mouthArc()} />
      </g>
    </svg>
  );
}

export default App;
