import type {Action, VisibilityFilter} from "./actions";

export type Todo = {
    text: string,
    completed: boolean
};

export type User = {
    id: number,
    name: string
};

export type ApplicationState = {
    visibilityFilter: VisibilityFilter,
    todoList: Todo[],
    isFetching: false,
    entity: {
        userList: User[]
    }
};

export function reduceApp(state: ApplicationState = {}, action: Action): ApplicationState {
    return {
        visibilityFilter: reduceVisibilityFilter(state.visibilityFilter, action),
        todoList: reduceTodoList(state.todoList, action),
        isFetching: false,
        entity: {
            userList: [
                {id: 1, name: 'jpc'},
                {id: 2, name: 'am'}
            ]
        }
    };
}

function reduceVisibilityFilter(state: VisibilityFilter = "SHOW_ALL", action: Action): VisibilityFilter {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
}

function reduceTodoList(state: Todo[] = [], action: Action): Todo[] {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {text: action.text, completed: false}];
        case "TOGGLE_TODO":
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {completed: !todo.completed})
                }
                return todo;
            });
        default:
            return state;
    }
}