
import Beers from './Beers';
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer';
import { Link } from 'react-router-dom';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function HomePage() {

  return (
    <div>
      <>
      <section>
        <Link to="/beers">
          <img src={allBeersImg} alt="" />
        </Link>
      </section>
      <section>
        <Link to="random-beer">
          <img src={randomBeerImg} alt="" />
        </Link>
      </section>
      <section>
        <Link to="/new-beer">
          <img src={newBeerImg} alt="" />
        </Link>
      </section>
      </>
    </div>
  )
}

export default HomePage