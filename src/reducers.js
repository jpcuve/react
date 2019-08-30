import type {Action, VisibilityFilter} from "./actions";

export type Todo = {
    text: string,
    completed: boolean
};

export type Customer = {
    id: number,
    name: string
};

export type CustomerList = {
    isFetching: boolean,
    items: Customer[]
}

export type ApplicationState = {
    visibilityFilter: VisibilityFilter,
    todoList: Todo[],
    customerList: CustomerList,
};

export function reduceApp(state: ApplicationState = {}, action: Action): ApplicationState {
    return {
        visibilityFilter: reduceVisibilityFilter(state.visibilityFilter, action),
        todoList: reduceTodoList(state.todoList, action),
        customerList: reduceCustomerList(state.customerList, action)
    };
}

function reduceCustomerList(state: CustomerList = {isFetching: false, items: []}, action: Action): CustomerList {
    switch(action.type){
        case "REQUEST_CUSTOMERS":
            return {isFetching: true, items:[]};
        case "RECEIVE_CUSTOMERS":
            return {isFetching: false, items: action.data};
        default:
            return state;
    }
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