import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";

const CountriesContainers = () => {
    
    const [countries,setCountries] = useState(null);

    const loadCountryData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data[0]);

    }

    useEffect(() => {
        loadCountryData();
    }, []);

    return (
    <>
        {countries? <CountryList countries={countries[0]}/> : <p>Loading Countries...</p>}
        {/* {countries[0]} */}
    </>);
}

export default CountriesContainers;