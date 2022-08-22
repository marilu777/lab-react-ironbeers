import React, { useEffect, useState } from 'react'

function Beers() {
    const [beers, setBeers] = useState([]);

    const getBeers = async () => {
        try {
            let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            console.log(response.data);

            setBeers(response.data.reverse());
        } catch (error) {console.log(error);}
    };
    useEffect(() => {
        getBeers();
    }, []);

  return (
    <div>
        
        {beers.map((beer) => {
            return (
                <Link key={beer._id} to={`/${beer._id}`}/>
            );
        })}
        
    </div>
  );
}

export default Beers