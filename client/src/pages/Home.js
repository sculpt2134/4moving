import PropTypes from 'prop-types';
import React from 'react';

function Home({ title }) {
  return (
    <div>
      <h1 className="display-5 mb-3">{title || 'Home'}</h1>
      <p>Welcome to 4moving!</p>
    </div>
  );
}

Home.propTypes = {
  title: PropTypes.string,
};

export default Home;


