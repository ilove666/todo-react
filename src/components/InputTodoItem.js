/**
 * Created by Center on 9/23/2017.
 */
import React, {Component} from 'react';
import autoBind from "react-autobind";

class InputTodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.value || ''
        };
        autoBind(this);
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    submitEdit(e) {
        if(e.which === 13) {
            this.props.submitEdit(this.state.text);
        }
    }
    componentDidUpdate(nextProps, nextState) {
        var input = this.refs.inputEdit;
        input.focus();
    }
    render(){
        return(
            <input ref="inputEdit" type="text" className="edit" value={this.state.text} onChange={this.onChange} onKeyDown={this.submitEdit}/>
        );
    }
}

export default InputTodoItem;