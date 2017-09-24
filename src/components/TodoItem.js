/**
 * Created by Center on 9/23/2017.
 */
import React, {Component} from 'react';
import InputTodoItem from "./InputTodoItem";
import autoBind from "react-autobind/src/autoBind";

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            text: this.props.text || '',
            marked: this.props.marked
        };
        autoBind(this);
    }

    onEdit(e) {
        this.setState({
            editing: true
        })
    }

    submitEdit(text) {
        this.setState({
            editing: false,
            text: text
        })
    }

    deleteTodo() {
        this.props.deleteTodo(this.props.todoId);
    }

    onChangeComplete(e) {
        var isChecked = e.target.checked;
        this.setState({
            marked: isChecked
        })
        this.props.markTodo(this.props.todoId, isChecked);
    }

    render(){
        var editing = this.state.editing ? 'editing' : '';

        if(this.state.marked) {
            editing = 'completed';
        }
        return (
            <li className={editing}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={this.onChangeComplete} checked={this.state.marked}></input>
                    <label onDoubleClick={this.onEdit}>{this.state.text}</label>
                    <button className="destroy" onClick={this.deleteTodo}></button>
                </div>
                <InputTodoItem value={this.state.text} submitEdit={this.submitEdit}/>
            </li>
        )
    }
}

export default TodoItem;