import Country from "./Country";

const VisitedCountryList = ({visited}) => {
    
    const VisitedCountryList = visited.map((newlyVisited, id) => <Country key={id} country={newlyVisited}/> )
    
    return (
        <>
            <h1>Visited Countries:</h1>
            {VisitedCountryList}
        </>
      );
}
 
export default VisitedCountryList;