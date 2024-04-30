import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch(`https://nomad-nest-server.vercel.app/country`)
          .then((res) => res.json())
          .then((data) => {
            setCountries(data);
          });
      }, [countries]);

  return (
    <div className="text-center mx-10 lg:mx-24 mb-8 flex-col space-y-2">
        
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-2 lg:mx-24 gap-8 mb-10">
      {
        countries.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
      }

      </div>
      
    </div>
  );
};

export default Countries;
