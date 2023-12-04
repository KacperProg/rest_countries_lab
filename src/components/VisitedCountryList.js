import Country from "./Country";
import VisitedCountry from "./VisitedCountry";

const VisitedCountryList = ({visited}) => {
    
    const visitedCountryList = visited.map((newlyVisited, id) => <VisitedCountry key={id} country={newlyVisited}/> )
    
    return (
        <>
            <h1>Visited Countries:</h1>
            {visitedCountryList}
        </>
      );
}
 
export default VisitedCountryList;