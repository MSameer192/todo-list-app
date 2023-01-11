import * as actions from './actionTypes'


export const bugAdded = (description) => {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description
        }
    }
}