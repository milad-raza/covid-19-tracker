import React,{useEffect,useState } from 'react';
import { Cards, Navbar, Charts } from './Components';
import { globalData , countryData} from './Api';
import styles from './App.module.css';
import logo from "./images/logo.jpg";


function App() {

  const [global, setGlobal] = useState({})
  const [country, setCountry] = useState()

  useEffect(() =>{
    async function getdata() {
      const data = await globalData();
      
      setGlobal( data );
    }
    getdata()
  }, [])

 const handleCountryChange = async (country) => {
    const data = await countryData(country);

   setGlobal(data)
   setCountry(country)
  };

console.log(global);

  return (
    <div className={styles.container}>
      <img src={logo} alt="Covid-19" className={styles.logo} />
      <Navbar handleCountryChange={handleCountryChange} />
      <Cards data={global} country={country} />
      <Charts data={global} country={country} />
    </div>
  );
}

export default App;
