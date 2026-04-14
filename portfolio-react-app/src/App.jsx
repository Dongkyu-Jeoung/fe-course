
import "./App.css"
import Header from "./components/Header.jsx"
import Content from "./components/Content.jsx"
import Footer from "./components/Footer.jsx"
import { fetchData } from "./utill/fetch.js"
import { useState, useEffect } from 'react'

export default function App() {
  const [data, setData] = useState({});

  useEffect ( () => {
    async function loadData () {
      let jsonData = await fetchData("http://localhost:5173/data/portfolio.json");
      
      setData(jsonData);
    }
    
    loadData();
  }, []);
  
  console.log(data);
  
  return (
    <>
      <Header jsonHeader={data.header}/>
      <Content />
      <Footer />
    </>
  )
}

