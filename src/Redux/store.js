import dialogsReduser from "./dialogs-reducer"
import profileReduser from "./profile-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, my name is Dmitriy!', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 34 }
            ],
            newPostText: 'Enter the text'
        },

        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Dmitriy' },
                { id: 2, name: 'Nataly' },
                { id: 3, name: 'Andrey' },
                { id: 4, name: 'Arina' },
                { id: 5, name: 'Sergey' },
                { id: 6, name: 'Batman' }
            ],
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: "I'm not Batman" },
                { id: 3, message: "I don't know where the detonator is" }
            ],
            newMessageBody: ''
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)

        this._callSubscriber(this._state);
    }
}
export default store
window.store = store
