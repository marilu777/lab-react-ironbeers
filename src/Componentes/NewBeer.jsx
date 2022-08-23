import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
    };

    axios
    .post(`https://ih-beers-api2.herokuapp.com/beers/new`, body)
    .then((response) => {
      setName('');
      setTagline('');
      setDescription('');
      navigate('/beers');
    })
    .catch((err) => console.log(err));
};

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline: </label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <button className="button selected">Add New Beer</button>
      </form>
      </div>
  )
}

export default NewBeer