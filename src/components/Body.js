/**
 * Created by Center on 9/23/2017.
 */
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import {SHOW_ALL, ACTIVE, COMPLETED} from '../constants/FilterTypes';

const filters = {
    [SHOW_ALL]: () => true,
    [ACTIVE]: (todo) => !todo.marked,
    [COMPLETED]: (todo) => todo.marked
}

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: SHOW_ALL
        };

        autoBind(this);
    }

    render(){
        return(
              <div className="main">
                  {this.renderTodoListItem()}
                  {this.renderFooter()}
              </div>

        );
    }

    onDeleteTodo(id) {
        this.props.actions.deleteTodo(id);
    }

    onMarkTodo(id, marked) {
        this.props.actions.markTodo(id, marked);
    }

    onClearMarked() {
        this.props.actions.clearMarked();
    }

    filterTodos(type) {
        this.setState({
            filter: type
        });
    }

    renderTodoListItem() {
        var todos = this.props.todos.filter(filters[this.state.filter]);

        var elements = todos.map((todo, index) => {
            return <TodoItem key={todo.id} todoId={todo.id} text={todo.text} marked={todo.marked} deleteTodo={this.onDeleteTodo} markTodo={this.onMarkTodo}/>;

        });

        return (
            <ul className="todo-list">
                {elements}
            </ul>
        );
    }



    renderFooter() {
        var todos = this.props.todos.filter(filters[this.state.filter]);
        return (
            <Footer todos={todos} applyFilter={this.filterTodos} clearMarked={this.onClearMarked}/>
        )
    }

}

export default Body;