import { actionIds } from "./../../typescript/types"

const initialState = {
    users: [], 
};

const UsersReducer = (state = initialState, action:any) => {
    switch (action.type) {
         case "SET_USERS": {
            const statecopy = {
                ...state
            };
            statecopy.users = [...state.users]
            statecopy.users = action.users;
            return statecopy;
        }
        default: {
            return state;
        }
    }
};

export const setUsersAC = (users:any) => {
    return {
        type: actionIds.SET_USERS,
        users:users,
    }
}

export const setUsersSaga = () => {
    return {
        type: actionIds.SET_USERS_SAGA,
    }
}

export default UsersReducer;