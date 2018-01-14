import React from 'react';

export default ({ article }) => {
  return (
    <footer className='container footer'>
      <div>
        Icons made by
        <a href="http://www.freepik.com" title="Freepik"  target="_blank" rel='noopener'> Freepik </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon"  target="_blank" rel='noopener'> www.flaticon.com </a>
        is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel='noopener'> CC 3.0 BY </a>
      </div>
      <div>
        News powered by 
        <a href='https://newsapi.org/' title='NewsAPI'  target="_blank" rel='noopener'> NewsAPI.org</a>
      </div>
    </footer>
  );
};