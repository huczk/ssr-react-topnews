import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...ArticlesListPage,
        path: '/articles/:category',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
]