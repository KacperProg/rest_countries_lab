import Country from "./Country";
import VisitedCountry from "./VisitedCountry";

const VisitedCountryList = ({visited}) => {
    
    // const visitedCountryList = visited.map((newlyVisited, id) => <Country key={id} country={newlyVisited} onButtonClick={() => onVisitCountry(id)}/> )
    const visitedCountryList = visited.map((country, id) => <VisitedCountry key={id} country={country}/> )
    console.log(visited)
    return (
        <>
            <h1>Visited Countries:</h1>
            {visitedCountryList}
        </>
      );
}
 
export default VisitedCountryList;