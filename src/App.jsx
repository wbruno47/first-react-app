import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'
import ColorList from './ColorList'
import ShoppingList from './ShoppingList'
import Counter from './Counter'
import ColorBox from './ColorBox'
import ColorGrid from './ColorGrid'
const data = [
  { id: 1, item: 'eggs', quantity: 12, completed: false },
  { id: 2, item: 'milk', quantity: 1, completed: true },
  { id: 3, item: 'chicken breasts', quantity: 4, completed: false },
  { id: 4, item: 'carrots', quantity: 6, completed: true }
]


const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <div>
  //     <Greeter name="Will" />
  //     <Greeter name="Dakota" />
  //     <ColorList colors={["red", "green", "blue", "pink", "purple"]} />
  //   </div>
  // )
  return (
    <ColorGrid colors={colors} />
  )
}

export default App
