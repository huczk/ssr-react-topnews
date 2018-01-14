import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeErrorTile } from '../actions';

class ErrorTile extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.closeErrorTile();
    }, 4000);
  }

  render() {
    return (
      this.props.error
        ? <div className='errorTile'>
            <p>{this.props.error}</p>
            <span onClick={this.props.closeErrorTile}>&#10006;</span>
          </div>
        : null
    );
  };
};

function mapStateToProps({ error }) {
  return { error };
};

export default connect(mapStateToProps, { closeErrorTile })(ErrorTile);