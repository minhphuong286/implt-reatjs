import React, { Component } from "react";
import { connect } from "react-redux";
import './ManageSchedule.scss';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions';
import Select from 'react-select';
import { LANGUAGES, CRUD_ACTIONS, dateFormat } from '../../../utils';
// import DatePicker from "react-flatpickr";
import DatePicker from '../../../components/Input/DatePicker';
import { toast } from "react-toastify";
import _ from 'lodash';
import moment from "moment";
import { saveBulkScheduleDoctor } from '../../../services/userService';

class ManageSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDoctors: [],
            selectedDoctor: {},
            currentDate: '',
            rangeTime: []
        }
    }
    componentDidMount() {
        this.props.fetchAllDoctors();
        this.props.fetchAllScheduleTime();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDateInputSelect(this.props.allDoctors);
            this.setState({
                listDoctors: dataSelect
            })
        }
        if (prevProps.allScheduleTime !== this.props.allScheduleTime) {
            let data = this.props.allScheduleTime;
            // console.log('data all time: ', data);
            if (data && data.length > 0) {
                data = data.map(item => ({ ...item, isSelected: false }))
            }
            this.setState({
                rangeTime: data
            })
        }
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buildDateInputSelect(this.props.allDoctors)
            this.setState({
                listDoctors: dataSelect
            })
        }
    }
    buildDateInputSelect = (data) => {
        let result = [];
        let { language } = this.props;
        if (data && data.length > 0) {
            data.map((item, index) => {
                let obj = {}
                let labelVi = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`;
                obj.label = language === LANGUAGES.VI ? labelVi : labelEn;
                obj.value = item.id;
                result.push(obj)
            })
        }
        return result;
    }
    handleChangeSelect = async (selectedDoctor) => {
        this.setState({ selectedDoctor: selectedDoctor })
    }
    handleOnchangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        })
    }

    handleClickBtnTime = (time) => {
        let { rangeTime } = this.state;
        if (rangeTime && rangeTime.length > 0) {
            rangeTime = rangeTime.map(item => {
                if (item.id === time.id) item.isSelected = !item.isSelected;
                return item;
            })
            this.setState({
                rangeTime: rangeTime
            })
        }
    }

    handleSaveSchedule = async () => {
        let { rangeTime, selectedDoctor, currentDate } = this.state;
        let result = [];

        if (!currentDate) {
            toast.error("Invalid date! ");
            return;
        }
        if (selectedDoctor && _.isEmpty(selectedDoctor)) {
            toast.error("Invalid selected doctor");
            return;
        }

        // let formatedDate = moment(currentDate).format(dateFormat.SEND_TO_SERVER);
        let formatedDate = new Date(currentDate).getTime();

        if (rangeTime && rangeTime.length > 0) {
            let selectedTime = rangeTime.filter(item => item.isSelected === true);
            if (selectedTime && selectedTime.length > 0) {
                selectedTime.map((schedule, index) => {
                    let obj = {};
                    obj.doctorId = selectedDoctor.value;
                    obj.date = formatedDate;
                    obj.timeType = schedule.keyMap;
                    result.push(obj);
                })
            } else {
                toast.error("Invalid selected time!");
                return;
            }
        }
        let res = await saveBulkScheduleDoctor({
            arrSchedule: result,
            doctorId: selectedDoctor.value,
            formatedDate: formatedDate
        })
        console.log('check response in save schedule: ', res);
        console.log('Check save schedule: ', result);
    }
    render() {
        let { rangeTime } = this.state;
        let { language } = this.props;
        return (
            <div className="manage-schedule">
                <div className="title">
                    <FormattedMessage id={"manage-schedule.title"} />
                </div>
                <div className="manage-schedule__content">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 form-group">
                                <label><FormattedMessage id={"manage-schedule.choose-doctor"} /></label>
                                <Select
                                    value={this.state.selectedDoctor}
                                    onChange={this.handleChangeSelect}
                                    options={this.state.listDoctors}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label><FormattedMessage id={"manage-schedule.choose-date"} /></label>
                                <DatePicker
                                    onChange={this.handleOnchangeDatePicker}
                                    className="data-picker"
                                    value={this.state.currentDate}
                                    minDate={new Date()}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 pick-hour-container">
                                {rangeTime && rangeTime.length > 0 &&
                                    rangeTime.map((item, index) => {
                                        return (
                                            <button
                                                className={item.isSelected === true ? "btn btn-schedule active" : "btn btn-schedule"}
                                                key={index}
                                                onClick={() => this.handleClickBtnTime(item)}>
                                                {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-primary btn-save-schedule"
                                    onClick={() => this.handleSaveSchedule()}>
                                    <FormattedMessage id={"manage-schedule.save"} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
        allScheduleTime: state.admin.allScheduleTime
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        fetchAllScheduleTime: () => dispatch(actions.fetchAllScheduleTime())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
