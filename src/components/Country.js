const Country = ({country, onButtonClick}) => {
    
    const handleButtonClick = () => {onButtonClick()}

    return (
        <>
        <h3>{country.name.common}</h3>
        <button onClick={handleButtonClick}>Visited!</button>
        </>
        );
}
 
export default Country;