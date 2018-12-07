const userDataReducerDefaultState = [];

const userAboutReducer = (state = userDataReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ABOUT':
            return [
                ...state,
                action.usersAbout
            ];
        /*case 'ADD_ABOUT':
            return state.map((user) => {
                if(user.id === action.id){
                    return{
                        ...user,
                        ...action.updates
                    };
                }else{
                    return user;
                }
            });*/
        default:
            return state;
    }
};

export default userAboutReducer;