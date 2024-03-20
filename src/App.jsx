import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <h1>About Us</h1>
        <p>這是一個簡易的靜態網頁，用於展示基本的HTML結構。</p>
        <p>我們專注於提供高質量的網頁設計和開發服務，以滿足您的所有需求。</p>
      </div>
    </>
  )
}

export default App
