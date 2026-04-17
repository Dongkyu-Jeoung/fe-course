
import "./App.css"
import Header from "./components/Header.jsx"
import Content from "./components/Content.jsx"
import Footer from "./components/Footer.jsx"
import { fetchData } from "./utill/fetch.js"
import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"

export default function App() {
  const [like, setLike] = useState(0);
  const [data, setData] = useState({});

  useEffect ( () => {
    async function loadData () {
      let jsonData = await fetchData("http://localhost:5173/data/portfolio.json");
      
      setData(jsonData);
    }
    
    loadData();
  }, []);
  
  return (
    <>
      <Header jsonHeader={data?.header}/>
      <Outlet context={{data : data?.content}}/>
      <Footer jsonFooter={data?.footer}/>
    </>
  )
}

