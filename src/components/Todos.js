import React from 'react'
import Welcome from "./Welcome";
import TodoList from "./TodoList";
import {store} from '../index';
import {ApplicationState} from '../reducers';
import {toggleTodo} from '../actionTypes';


type Props = {};
type State = {
    current: ApplicationState
};

export default class Todos extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            current: store.getState()
        };
    }

    handleToDoClick(index: number): void {
        store.dispatch(toggleTodo(index));
        this.setState((prevState) => prevState.current = store.getState());
    }

    render() {
        console.debug(`Context: ${JSON.stringify(this.context.store)}`)
        return (
            <div>
                <Welcome name="The new todos page"/>
                <pre>{JSON.stringify(this.state.current)}</pre>
                <TodoList todos={this.state.current.todos}
                          onTodoClick={(index: number) => this.handleToDoClick(index)}/>
            </div>
        )
    }
}