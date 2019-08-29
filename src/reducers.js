import type {Action, VisibilityFilter} from "./actionTypes";

type Todo = {
    text: string,
    completed: boolean
};
type State = {
    visibilityFilter: VisibilityFilter,
    todos: Todo[]
};

export function reduceApp(state: State = {}, action: Action): State {
    return {
        visibilityFilter: reduceVisibilityFilter(state.visibilityFilter, action),
        todos: reduceTodos(state.todos, action)
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

function reduceTodos(state: Todo[] = [], action: Action): Todo[] {
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