import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader';

class Homepage extends Component {

    render() {
        return (
            <>
                <HomeHeader/>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
      
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
