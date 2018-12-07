import React from 'react';

const userDataReducerDefaultState = [];
var userDetails = {};

const userReducer = (state = userDataReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            userDetails=action.users;
            return [
                ...state,
                action.users
            ];
        case 'ADD_ABOUT':
            /*state.
            return [
                ...state,
                action.users,
                {name: 'Wastey'}
            ];*/


            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                if(user.id === action.id){
                    action.users.id=action.id;

                    userDetails.addAbout=action;

                    console.log("userDetails down here!");
                    console.log(userDetails);
                    console.log("userDetails down here!");

                    return userDetails;
                }else{
                    //return user;
                }
            });

        case 'ADD_ACADEMIA_1':



            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                if(user.id === action.id){
                    action.users.id=action.id;


                    userDetails.addAcademia1 =  action;

                    return userDetails;
                }else{
                    //return user;
                }
            });

        case 'ADD_ACADEMIA_2':



            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                if(user.id === action.id){
                    action.users.id=action.id;


                    userDetails.addAcademia2 =  action;

                    return userDetails;
                }else{
                    //return user;
                }
            });
        case 'ADD_ACADEMIA_3':



            return state.map((user) => {
                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);


                if(user.id === action.id){
                    action.users.id=action.id;


                    userDetails.addAcademia3 =  action;

                    return userDetails;
                }else{
                    //return user;
                }
            });


        case 'ADD_ACADEMIA_4':


        return state.map((user) => {

            console.log("User! In about");
            console.log(user);
            console.log("action!");
            console.log(action);

            if(user.id === action.id){
                action.users.id=action.id;



                userDetails.addAcademia4 =  action;

                //console.log(userDetails);

                return userDetails;
            }else{
                //return user;
            }
        });

        case 'ADD_ACADEMIA_5':


            return state.map((user) => {

                console.log("User!");
                console.log(user);
                console.log("action!");
                console.log(action);

                if(user.id === action.id){
                    action.users.id=action.id;



                    userDetails.addAcademia5 =  action;

                    console.log(userDetails);

                    return userDetails;
                }else{
                    //return user;
                }
            });

        case 'ADD_ACADEMIA_6':



            return state.map((user) => {

                if(user.id === action.id){
                    action.users.id=action.id;


                    userDetails.addAcademia6 =  action;

                    return userDetails;
                }else{
                    //return user;
                }
            });


        case 'ADD_ACADEMIA_7':


            return state.map((user) => {

                if(user.id === action.id){
                    action.users.id=action.id;



                    userDetails.addAcademia7 =  action;

                    //console.log(userDetails);

                    return userDetails;
                }else{
                    //return user;
                }
            });

        case 'ADD_ACADEMIA_8':


            return state.map((user) => {

                if(user.id === action.id){
                    action.users.id=action.id;



                    userDetails.addAcademia8 =  action;

                    //console.log(userDetails);

                    return userDetails;
                }else{
                    //return user;
                }
            });
        case 'ADD_TRANSFER_STUDENT_1':



            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                if(user.id === action.id){
                    action.users.id=action.id;


                    userDetails.addTransferStudent1 =  action;

                    return userDetails;
                }else{
                    //return user;
                }
            });

        case 'ADD_TRANSFER_STUDENT_2':

            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                if(user.id === action.id){
                    action.users.id=action.id;

                    userDetails.addTransferStudent2 =  action;

                    //console.log("From Transfer 2");
                    //console.log(userDetails);

                    return userDetails;
                }else{
                    //return user;
                }
            });


        case 'ADD_WORK_EXPERIENCE_1':



            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                if(user.id === action.id){
                    action.users.id=action.id;


                    userDetails.addWorkExperience1 =  action;

                    return userDetails;
                }else{
                    //return user;
                }
            });


        case 'ADD_WORK_EXPERIENCE_2':

        return state.map((user) => {

            console.log("User! In about");
            console.log(user);
            console.log("action!");
            console.log(action);

            if(user.id === action.id){
                action.users.id=action.id;

                userDetails.addWorkExperience2 =  action;

                //console.log(userDetails);

                return userDetails;
            }else{
                //return user;
            }
        });

        case 'ADD_WORK_EXPERIENCE_3':



            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                if(user.id === action.id){
                    action.users.id=action.id;


                    userDetails.addWorkExperience3 =  action;

                    return userDetails;
                }else{
                    //return user;
                }
            });

        case 'ADD_WORK_EXPERIENCE_4':



            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                if(user.id === action.id){
                    action.users.id=action.id;

                    userDetails.addWorkExperience4 =  action;

                    //console.log(userDetails);

                    return userDetails;
                }else{
                    //return user;
                }
            });

        case 'ADD_FAV_SUBS':

            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                console.log('in Fav Subs');

                //console.log(user[0].id);
               // console.log(action);
                if(user.id === action.id){
                    action.users.id=action.id;

                    userDetails.addFavSubs =  action;

                    //console.log(userDetails);

                    return userDetails;
                }else{
                    //return user;
                }
            });


        case 'ADD_HOBBIES':

            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                console.log('in Hobbies');

                //console.log(user[0].id);
                // console.log(action);
                if(user.id === action.id){
                    action.users.id=action.id;

                    userDetails.addHobbies =  action;

                    //console.log(userDetails);

                    return userDetails;
                }else{
                    //return user;
                }
            });

        case 'ADD_VALUES':

            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                console.log('In Values!');

                //console.log(user[0].id);
                //console.log(action);
                if(user.id === action.id){
                    action.users.id=action.id;

                    userDetails.addValues =  action;

                    //console.log(userDetails);

                    return userDetails;
                }else{
                    //return user;
                }
            });

        case 'ADD_BIG5':

            return state.map((user) => {

                console.log("User! In about");
                console.log(user);
                console.log("action!");
                console.log(action);

                console.log('In Big5!');

                //console.log(user[0].id);
                //console.log(action);
                if(user.id === action.id){
                    action.users.id=action.id;

                    userDetails.addBig5 =  action;

                    //console.log(userDetails);

                    return userDetails;
                }else{
                    //return user;
                }
            });
        default:
            return state;
    }
};

export default userReducer;