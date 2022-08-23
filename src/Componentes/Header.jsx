import { Link } from 'react-router-dom';
const homeImg =
  'https://www.svgrepo.com/svg/147593/home-button';

function Header() {
  return (
    <div>
      <Link to="/">
        <img src={homeImg} alt="home icon" />
      </Link>
    </div>
  )
}

export default Header