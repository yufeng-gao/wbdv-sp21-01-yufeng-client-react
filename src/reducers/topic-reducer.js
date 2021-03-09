const initialState = {
    topics: [
        {title: 'placeholder', _id: '123'},
        {title: 'fake lesson', _id: '234'}
    ],
    other: 111
}

const topicReducer = (state=initialState, action) => {
    switch(action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic._id === action.updateTopic._id) {
                        return action.updateTopic
                    } else {
                        return topic
                    }
                })
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                lessons: state.topics.filter(topic => {
                    if (topic._id !== action.topicToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        default:
            return state;
    }
}

export default topicReducer;