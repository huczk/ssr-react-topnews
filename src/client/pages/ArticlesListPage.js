import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import ArticleCard from '../components/Articlecard';
import { getArticles } from '../actions';

class ArticlesList extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.match.params.category !== this.props.match.params.category) {
      this.props.getArticles(newProps.match.params.category);
    }
  }

  componentDidMount() {
    this.props.getArticles(this.props.match.params.category);
  }

  renderArticles() {
    return this.props.articles[this.props.match.params.category].map((article, index) => {
      return <ArticleCard key={index} article={article} />;
    })
  }

  pageTitle() {
    return this.props.categories.find(item => item.slug === this.props.match.params.category);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.pageTitle().name} News</title>
        </Helmet>
        <div className='titleWrapper'>
          <h1>{this.pageTitle().name}</h1>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='container__cards'>
              {this.props.articles[this.props.match.params.category] ? this.renderArticles() : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ articles, categories }) {
  return { articles, categories };
}

function loadData(store, category = 'general') {
  return store.dispatch(getArticles(category));
};

export default {
  loadData,
  component: connect(mapStateToProps, { getArticles })(ArticlesList)
}