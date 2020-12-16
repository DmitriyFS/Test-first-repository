const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {

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
}

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({
                id: 5, message: body
            })
            return state
        default:
            return state

    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReduser