import React, {useEffect} from 'react'
import {connect, Provider} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from "../services/topic-service"

const TopicPills = (
    {
        topics=[],
        createTopic,
        findTopicsForLesson,
        updateTopic,
        deleteTopic
    }) => {
    const { layout, courseId, moduleId, lessonId } = useParams();
    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [])
    return (
        <ul class="nav nav-pills">
            {
                topics.map(topic =>
                    <EditableItem
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                        deleteItem={deleteTopic}
                        updateItem={updateTopic}
                        item={topic}
                        type='topic' />
                )
            }
            <li className="nav-item">
                <i onClick={() => createTopic(lessonId)} className="fas fa-plus fa-2x"></i>
            </li>
        </ul>
    )
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {title: 'New Topic'})
            .then(topic => dispatch({type: "CREATE_TOPIC", topic: topic}))
        
    },
    updateTopic: (newTopic) => {
        topicService.updateTopic(newTopic._id, newTopic)
            .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newTopic}))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    },
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics: topics  
        }))
    }
})

export default connect(stpm, dtpm)(TopicPills)