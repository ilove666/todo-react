/**
 * Created by Center on 9/23/2017.
 */
import React, {Component} from 'react';
import autoBind from 'react-autobind';

class Header extends Component {
    static PropsType = {
        addTodo: React.PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);

        this.state = {};

        autoBind(this);
    }

    addTodo(e) {

        if(e.which === 13) {
            if(e.target.value.length > 0) {
                this.props.addTodo(0, e.target.value);
                e.target.value = '';
            }
        }
    }
    render(){
        return(
            <input className="new-todo" placeholder="What needs to be done?" onKeyDown={this.addTodo}></input>
        );
    }
}

export default Header;