/**
 * Created by Center on 9/23/2017.
 */
import React, {Component} from 'react'
import Header from '../components/Header';
import autoBind from 'react-autobind';
import {bindActionCreators} from "redux";
import * as TodoActionCreator from "../actions/TodoActionCreator";
import {connect} from "react-redux";
import Body from "../components/Body";

/**
 * Know as smart component. this class communicate with redux via react-redux connect()
 * It usually contains 3 functions: mapStateToProps(state, [ownProps]), mapDispatchToProps, mergeProps(stateProps, dispatchProps, ownProps) and options
 */
class TodoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        autoBind(this);
    }



    render(){
        const { todos, actions } = this.props;
        return(
              <div className="todoapp">
                <h1>Todos</h1>
                <Header addTodo={actions.addTodo}/>
                <Body todos={todos} actions={actions}/>
              </div>
        );
    }
}

    // map state to props
    function mapStateToProps(state) {
        return {
            todos: state.TodoReducers
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(TodoActionCreator, dispatch)
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);