import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"



function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [flagurl, setFlagurl] = useState(null);

  //Get all the country names when the app is started
  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
      .then(resp => {
        const orderedNames = resp.data.map(c => c.name.common);
        //sort the country names before setting to state
        orderedNames.sort();  
        setCountries(orderedNames);  
        //Set the first country as selected ==> causes fetching of the first flag.
        countryChanged(orderedNames[0]);
      });
  },[]);

  //Changing the current country causes the fetching of the flag url
  function countryChanged(coumntryName){
    setCountry(val);
    axios.get('https://restcountries.com/v3.1/name/'+val.replaceAll(' ', '%20'))
      .then(resp => setFlagurl(resp.data[0].flags.png ))
  }

  return (
    <div>
      <select value={country} onChange={e => countryChanged(e.target.value)}>
        {
          countries.map(c => <option key={c} value={c}>{c}</option>)
        }
      </select><br/>
      <img src={flagurl}/>
    </div>
  )
}


/**
 * This version fetches both country names and flags in the same get.
 */
function AnotherSolution(){
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
      .then(resp => {
        const countriesTemp = resp.data.map(c => ({name: c.name.common, flag: c.flags.png}));
        //Using custom sorting callback (to compare the country names)
        const ordered = countriesTemp.sort((a,b) => a.name.localeCompare(b.name)); 
        setCountries(ordered);
        setCountry(ordered[0]);
      } )
  },[]);
  

  function countryChanged(e){
    const val = e.target.value
    setCountry( countries.find(c => c.name == val) );
  }

  return (
    <div>
      <select value={country?.name} onChange={countryChanged}>
        {
          countries.map(c => <option key={c.name} value={c.name}>{c.name}</option>)
        }
      </select><br/>
      <img src={country?.flag}/>
    </div>
  )
}


export  {App, AnotherSolution};
