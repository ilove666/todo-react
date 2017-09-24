/**
 * Created by Center on 9/23/2017.
 */
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import {SHOW_ALL, ACTIVE, COMPLETED} from '../constants/FilterTypes';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: SHOW_ALL
        };
        autoBind(this);
    }

    renderCountTodos() {
        var count = this.props.todos.length;
        return (
            <span className="todo-count">{count} item left</span>
        );
    }

    renderFilters() {
        const {applyFilter} = this.props;
        var filterElements = [SHOW_ALL, ACTIVE, COMPLETED].map((filter, index) => {
            var text = 'All';
            switch(filter) {
                case SHOW_ALL:
                default:
                    text = 'All';
                    break;
                case ACTIVE:
                    text = 'Active';
                    break;
                case COMPLETED:
                    text = 'Completed';
                    break;
            }

            return (
                <li key={index}><a onClick={() => {
                    this.setState({filter: filter});
                    applyFilter(filter);
                }}>{text}</a></li>
            );
        });

        return (
            <ul className="filters">
                {filterElements}
            </ul>
        )
    }

    renderClearCompleted() {
        return (
            this.state.filter === COMPLETED && this.props.todos.length > 0 ? <span className="clear-completed" onClick={this.clearMarked}>Clear completed</span> : ''
        );
    }

    clearMarked() {
        this.props.clearMarked();
    }

    render(){
        return(
              <div className="footer">
                  {this.renderCountTodos()}
                  {this.renderFilters()}
                  {this.renderClearCompleted()}
              </div>
        );
    }
}

export default Footer;