import Country from "./Country";

const CountryList = ({countries, onVisitCountry}) => {

    const listOfCountries = countries.map((country, id) => <Country key={id} country={country} onButtonClick={() => onVisitCountry(id)}/>)

    return ( 
        <>  
            <h1>Bucket List Countries:</h1>
            {listOfCountries}
        </>
    );
}
 
export default CountryList;