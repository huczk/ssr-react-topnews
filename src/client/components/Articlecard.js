import React from 'react';
import LazyLoad from 'react-lazyload';

export default ({ article }) => {
  return (
    <a href={article.url} className='article__card' target='_blank' rel='noopener'>
      <div className='article__card-image'>
        <LazyLoad
          height={200}
          placeholder={<img src='/placeholder.jpg' alt='article image' />}
        >
          <img src={article.urlToImage || '/placeholder.jpg'} alt='article image' />
        </LazyLoad>
      </div>
      <div className='article__card-content'>
        <h3>{article.title}</h3>
        <span>
          {article.author ? `Author: ${article.author}` : ''}
        </span>
        <span>
          {article.source ? `Source: ${article.source.name}` : ''}
        </span>
      </div>
    </a>
  );
};