const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    dialogsData: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Natasha'},
        {id: 4, name: 'Petra'},
        {id: 5, name: 'Vitya'},
        {id: 6, name: 'Kolya'}
    ],
    messageData: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'my name is petra'},
        {id: 3, message: 'yo'}
    ],
    newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMsn = {
                id: 4,
                message: action.text
            };
            return {
                ...state,
                messageData: [...state.messageData, newMsn],
                newMessageText: ""
            };
        default:
            return state;
    }
}

export const sendMessage = (text) =>
    ({type: ADD_MESSAGE, text});

export default dialogReducer;