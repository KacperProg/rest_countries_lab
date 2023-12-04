import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";

const CountriesContainers = () => {
    
    const [countries,setCountries] = useState([]);
    const [visited,setVisited] = useState([]);
    
    const loadCountryData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        setCountries(countries);
    }

    const visitOfCountry = (newVisited) => {
        const nowVisited = [...visited,newVisited]
        // nowVisited.push(newVisited)
        setVisited(nowVisited)
        const index = countries.indexOf(newVisited)
        countries.splice(index,1)
        setCountries(countries)
    }

    useEffect(() => {
        loadCountryData();
    }, []);


    return (
    <>
        <CountryList countries={countries} onButtonClick={visitOfCountry}/>
        <VisitedCountryList visited={visited}/>
    </>);
}

export default CountriesContainers;