import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// search for restaurants by city and state
const HomePage = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // navigate to localhost:port/city/state 
    if (city && state) {
      navigate(`/${city.toLowerCase().replace(/\s+/g, '-')}/${state.toLowerCase()}`);
    }
  };

  return (
    <div className="col-lg-6 col-md-8 mx-auto">
      <form className="text-center my-5" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Welcome to the Restaurant Finder</h1>
        <p>Select a city and state to find restaurants.</p>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="state">State</label>
            <select 
              className="form-select" 
              id="state" 
              value={state} 
              onChange={(e) => setState(e.target.value)} 
              required
            >
              <option value="">Choose...</option>
              <option value="NY">New York</option>
              <option value="CA">California</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="city">City</label>
            <select 
              className="form-select" 
              id="city" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
              required
            >
              <option value="">Choose...</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary py-2" type="submit">Search</button>
      </form>
    </div>
  );
};

export default HomePage;



