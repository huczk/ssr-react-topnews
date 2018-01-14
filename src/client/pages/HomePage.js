import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({ categories }) => {
  return (
    <div>
      <div className='titleWrapper'>
        <h1>Home</h1>
      </div>
      <div className='container'>
        <h2>Choose a category</h2>
        <div className='row'>
          <div className='container__cards'>
          {categories.map((category, i) => (
            <div key={i} className={`home__card home__card--${i}`}>
              <Link to={`/articles/${category.slug}`}>
                <p>{category.name}</p>
              </Link>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ categories }) {
  return { categories };
}

export default {
  component: connect(mapStateToProps, {})(Home)
};