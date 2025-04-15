import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GlobalStyles } from './styles/GlobalStyles'
import MyRoutes from './routers/routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GlobalStyles/>
      <MyRoutes/>
    </>
  )
}

export default App
