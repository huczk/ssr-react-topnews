import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    e.stopPropagation();

    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    return (
      <div>
        <div className='logo'>
          <img src='/logo.svg' alt='logo' /><span>TopNews</span>
        </div>
        <div onClick={this.toggleMenu} className={`menu ${this.state.opened ? 'opened' : ''}`}>
          <span></span>
          <span>
            <ul className="sub-menu">
              <li><Link to='/'>Home</Link></li>
              {this.props.categories.map((category, i) => 
                <li key={i}>
                  <Link key={i} to={`/articles/${category.slug}`}>{category.name}</Link>
                </li>
              )}
            </ul>
          </span>
          <span></span>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ categories }) {
  return { categories };
};

export default connect(mapStateToProps)(Menu);