import { useState } from 'react'
import React from 'react'
import './App.css'
import PropsDemo from './component/PropsDemo'

import OrderedList3 from "./component/OrderedList3"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello world</h1>
      <PropsDemo companyname="software exports.pvt" para="Kickstart almost any project with essential Tailwind CSS UI elements through our Core Components collection. This category includes versatile button styles, checkbox variations, tab styles, accordions, alerts, forms, list styles, toggle buttons, badges, breadcrumbs, dropdowns, tooltips, progress bars, and more – Almost all core components are free for commercial use."></PropsDemo>
      <OrderedList3></OrderedList3>
    </>
  )
}

export default App
