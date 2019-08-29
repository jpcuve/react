export type VisibilityFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';
export type ActionType = 'ADD_TODO' | 'TOGGLE_TODO' | 'SET_VISIBILITY_FILTER';

type Action = {
    type: ActionType
}

export function addTodo(text: string): Action{
    return {type: 'ADD_TODO', text};
}

export function toggleTodo(index: number): Action {
    return {type: 'TOGGLE_TODO', index}
}

export function setVisibilityFilter(filter: VisibilityFilter): Action {
    return {type: 'SET_VISIBILITY_FILTER', filter}
}

