// import profileReducer from "./profileReducer";
// import dialogReducer from "./dialogReducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: 1, text: 'My first post', like: 20},
//                 {id: 2, text: 'My second post', like: 30}
//             ],
//             newPostText: ''
//         },
//         dialogPage: {
//             dialogsData: [
//                 {id: 1, name: 'Sergey'},
//                 {id: 2, name: 'Sveta'},
//                 {id: 3, name: 'Natasha'},
//                 {id: 4, name: 'Petra'},
//                 {id: 5, name: 'Vitya'},
//                 {id: 6, name: 'Kolya'}
//             ],
//             messageData: [
//                 {id: 1, message: 'hi'},
//                 {id: 2, message: 'my name is petra'},
//                 {id: 3, message: 'yo'}
//             ],
//             newMessageText: ''
//         },
//         newsPage: {},
//         musicPage: {}
//     },
//     _renderEntireTree() {
//         console.log("rendererEntireTree не определен")
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._renderEntireTree = observer;
//     },
//
//     dispatch(action) {
//         debugger;
//         console.log(action)
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
//         // this._state.newsPage = newsReducer(this._state.newsPage, action);
//         // this._state.musicPage = musicReducer(this._state.musicPage, action);
//         this._renderEntireTree();
//     }
// }
//
// export default store;
// window.store = store;