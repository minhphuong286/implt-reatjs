import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader';
import Specialty from './section/Specialty';
import MedicalFacility from './section/MedicalFacility';
import OutstandingDoctor from './section/OutstandingDoctor';
import HandBook from './section/HandBook';
import About from './section/About';
import HomeFooter from './HomeFooter';
class Homepage extends Component {

    render() {
        return (
            <>
                <HomeHeader isShowBanner={true} />
                <Specialty />
                <MedicalFacility />
                <OutstandingDoctor />
                <HandBook />
                <About />
                <HomeFooter />
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
