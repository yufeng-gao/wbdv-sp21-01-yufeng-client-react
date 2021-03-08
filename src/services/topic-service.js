const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001001798/lessons"
const TOPIC_URL = "https://wbdv-generic-server.herokuapp.com/api/001001798/topics"

export const createTopic = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json());

export const findTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}`)
        .then(response => response.json());

export const updateTopic = (topicId, topic) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json());

const api = {
    createTopic, findTopicsForLesson, findTopic, updateTopic, deleteTopic
}

export default api;