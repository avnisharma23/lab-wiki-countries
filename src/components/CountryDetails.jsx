
import { useParams,Link } from 'react-router-dom';

function CountryDetails(props){
    const { id } = useParams();
    console.log("Id",id) ;
    const { countries } = props;
    const country = countries.find((item) => {
      return id === item.alpha3Code;
    });
    return(
             <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country_flag"/>     
        <h1>{country.name.common}</h1>
       <table>
       <thead></thead>
       <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <ul>
                    {country.borders.map((borderCode) => {
                      const borderCountry = countries.find((item) => {
                        return borderCode === item.alpha3Code;
                      });
                      return (
                        <li key={borderCode}>
                          <Link to={`/${borderCode}`}>
                            {borderCountry.name.common}
                          </Link>
                        </li>
                      );
                    })}
                    </ul>
                </tr>
               {/*  <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr> */}
              </tbody>
       </table>
      </div>
      
    )
}

export default CountryDetails;