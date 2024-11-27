import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WithLoader from './HOC'
import BaseComponent from './BaseComponent'

const EnhancedWithLoader = WithLoader(BaseComponent);

function App() {
  const [data,setData]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setData(["i1","i2","13","i4"])
      setIsLoading(false)

    },3000)
  },[])
  return <EnhancedWithLoader isLoading={isLoading} data={data}/>

}

export default App
