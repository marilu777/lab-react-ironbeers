import React from 'react'
import axios from 'axios'
import Beers from './Beers';
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer';
import { NavLink } from 'react-router-dom';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function HomePage() {

  return (
    <div>
        <nav>
            <ul>
                <NavLink to="/beers"  >Beers</NavLink>
                <NavLink to="/random-beer"  >Random Beer</NavLink>
                <NavLink to="/new-beer"   > New Beer</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default HomePage