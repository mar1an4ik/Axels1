export const setUsersSagaType = `setUsersSaga`;
export const setUsers = `setUsers`;

const initialState = {
    users: [], 
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
         case "setUsers": {
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

export const setUsersAC = (users) => {
    return {
        type: setUsers,
        users:users,
    }
}

export const setUsersSaga = () => {
    return {
        type: setUsersSagaType,
    }
}

export default UsersReducer;