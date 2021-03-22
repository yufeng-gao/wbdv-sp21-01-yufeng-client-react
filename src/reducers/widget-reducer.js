const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch(action.type) {
        case "CREATE_WIDGET":
            return{
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
            return{
                ...state,
                widgets: state.widgets.filter(widget => {
                    if (widget.id !== action.widgetIdToDelete) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_WIDGET":
            return{
                ...state,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.newWidget.id) {
                        return action.newWidget
                    } else {
                        return widget
                    }
                })
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return{
                ...state,
                widgets: action.widgets
            }
        default:
            return state;
    }
}

export default widgetReducer;