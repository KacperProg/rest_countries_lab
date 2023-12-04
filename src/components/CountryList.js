import Country from "./Country";

const CountryList = ({countries, onButtonClick}) => {

    const listOfCountries = countries.map((country, id) => <Country key={id} country={country} onButtonClick={onButtonClick}/>)

    return ( 
        <>  
            <h1>Bucket List Countries:</h1>
            {listOfCountries}
        </>
    );
}
 
export default CountryList;