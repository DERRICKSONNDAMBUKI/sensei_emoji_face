import { Face } from "./components/Face";
import {range} from 'd3'
const width = 160;
const height = 160;

const array=range(5*5)

const App = () => 
 array.map(()=>(
  <Face
  height={height}
  width={width}
  centerX={width / 2}
  centerY={height / 2}
  strokeWidth={6+Math.random()*3}
  eyeOffsetX={20+Math.random()*9}
  eyeOffsetY={20+Math.random()*15}
  eyeRadius={5+Math.random()*10}
  mouthWidth={7+Math.random()*9}
  mouthRadius={30 +Math.random()*10}
/>

 ))

export default App;
