import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './OutstandingDoctor.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';

class OutstandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }
    componentDidMount() {
        this.props.loadTopDoctors();
    }
    render() {
        let { arrDoctors } = this.state;
        let { language } = this.props;

        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        return (
            <>
                <div className='section-share outstanding-doctor'>
                    <div className='section-share-title'>
                        <h2>Bác sĩ nổi bật tuần qua</h2>
                        <a href='#' >Tìm kiếm</a>
                    </div>
                    <div className='section-share-content'>
                        <Slider {...settings}>
                            {arrDoctors && arrDoctors.length > 0 &&
                                arrDoctors.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                    }
                                    let nameVi = `${item.positionData.nameVi},${item.lastName} ${item.firstName}`;
                                    let nameEn = `${item.positionData.nameEn},${item.firstName} ${item.lastName}`;
                                    return (
                                        <div key={index}>
                                            <div className='cell'>
                                                <a href='#'>
                                                    <div className='img img1'
                                                        style={{ backgroundImage: `url(${imageBase64})` }}
                                                    ></div>
                                                    <h3>
                                                        Bác sĩ Chuyên khoa II <br />
                                                        {language === LANGUAGES.VI ? nameVi : nameEn}
                                                    </h3>
                                                </a>
                                                <span className='faculty'>Sức khỏe tâm thần</span>
                                            </div>
                                        </div>
                                    )

                                })
                            }
                        </Slider>
                    </div>
                </div>

            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        topDoctorsRedux: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
