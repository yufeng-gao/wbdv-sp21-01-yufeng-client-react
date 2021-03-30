import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";
import widgetService from "../../services/widget-service.js"

const WidgetList = (
    {
        widgets = [],
        createWidget,
        findWidgetsForTopic,
        updateWidget,
        deleteWidget
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams();
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])
    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List ({widgets.length})</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget} />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget} />
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget} />
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget} />
                            }
                            {/* {
                                editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget.id, editingWidget)
                                    }} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                                </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                            } */}
                            
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidget: (topicId) => {
        widgetService.createWidget(topicId, {
            type: "HEADING",
            widgetOrder: 0,
            text: "New Heading",
            src: "",
            size: 1,
            width: 0,
            height: 0,
            cssClass: "",
            style: "",
            value: "",
            ordered: false,
            topicId: topicId
        })
            .then(widget => dispatch({type: "CREATE_WIDGET", widget: widget}))
    },
    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({type: "FIND_ALL_WIDGETS_FOR_TOPIC", widgets: widgets}))
    },
    updateWidget: (widgetId, newWidget) => {
        widgetService.updateWidget(widgetId, newWidget)
            .then(status => dispatch({type: "UPDATE_WIDGET", newWidget: newWidget}))
    },
    deleteWidget: (widgetId) => {
        widgetService.deleteWidget(widgetId)
            .then(status => dispatch({type: "DELETE_WIDGET", widgetIdToDelete: widgetId}))
    }
})

export default connect(stpm, dtpm)(WidgetList)