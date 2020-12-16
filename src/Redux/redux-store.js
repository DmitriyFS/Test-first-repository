import {combineReducers, createStore} from 'redux'
import dialogsReduser from "./dialogs-reducer"
import profileReduser from "./profile-reducer"

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser
})

let store = createStore(reducers)

export default store