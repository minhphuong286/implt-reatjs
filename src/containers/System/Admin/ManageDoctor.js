import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import MarkdownIt from "markdown-it";
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './ManageDoctor.scss';
import Select from 'react-select';
import { LANGUAGES, CRUD_ACTIONS } from '../../../utils';
import { getDetailInforDoctor } from "../../../services/userService";
const mdParser = new MarkdownIt();

class ManageDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description: '',
            listDoctors: [],
            hasOldData: false,
        }
    }

    componentDidMount() {
        this.props.fetchAllDoctors()
    }
    dataSelectOptions = (data) => {
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataOptions = this.dataSelectOptions(this.props.allDoctors)
            this.setState({
                listDoctors: dataOptions
            })
        }
        if (prevProps.language !== this.props.language) {
            let dataOptions = this.dataSelectOptions(this.props.allDoctors)
            this.setState({
                listDoctors: dataOptions
            })
        }
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html
        })
    }
    handleSaveContentMarkdown = () => {
        this.props.saveDetailDoctorStart({
            contentMarkdown: this.state.contentMarkdown,
            contentHTML: this.state.contentHTML,
            doctorId: this.state.selectedOption.value,
            description: this.state.description,
            action: this.state.hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE
        })
        this.setState({
            selectedOption: '',
            description: '',
        })
    }

    handleChangeSelect = async (selectedOption) => {
        this.setState({
            selectedOption
        });
        let res = await getDetailInforDoctor(selectedOption.value);
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            let markdown = res.data.Markdown;
            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                hasOldData: true
            })
        } else {
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                hasOldData: false
            })
        }
    }
    handleOnChangeDesc = (evt) => {
        this.setState({
            description: evt.target.value
        })
    }
    render() {
        let { hasOldData } = this.state;
        return (
            <div className="manage-doctor-container">
                <div className="title text-center">
                    Create doctor informations
                </div>
                <div className="more-infor">
                    <div className="content-left form-group">
                        <label>Choose doctor</label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChangeSelect}
                            options={this.state.listDoctors}
                        />
                    </div>
                    <div className="content-right">
                        <label>Introduction</label>
                        <textarea className="form-control" rows={"4"}
                            onChange={(evt) => this.handleOnChangeDesc(evt)}
                            value={this.state.description}
                        ></textarea>
                    </div>
                </div>
                <div className="manage-doctor-editor">
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>
                <button
                    onClick={() => this.handleSaveContentMarkdown()}
                    className={hasOldData === true ? "save-content-doctor" : "create-content-doctor"}>
                    {hasOldData === true ? <span>Save infor</span> : <span>Create infor</span>}
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        saveDetailDoctorStart: (data) => dispatch(actions.saveDetailDoctorStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
