import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength10, required} from "../../utils/validator/validator";
import {Input} from "../common/Forms/renderField";

export default class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    onStatusChange = (data) => {
        this.setState({
            status: data.status,
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <ReduxStatusForm onSubmit={this.onStatusChange} status={this.state.status}/>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
                    </div>
                }
            </div>
        );
    }
}

const StatusForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Input}
                name={'status'}
                autoFocus={true}
                value={'props.status'}
                validate={[required, maxLength10]}/>
            <button>OK</button>
        </form>
    )
}

const ReduxStatusForm = reduxForm({form: 'statusForm'})(StatusForm);