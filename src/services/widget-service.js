const SERVER_URL = "https://cs5610-sp21-03-yufeng-java.herokuapp.com/"

export const createWidget = (tid, widget) =>
    fetch(`${SERVER_URL}/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findWidgetsForTopic = (tid) =>
    fetch(`${SERVER_URL}/api/topics/${tid}/widgets`)
    .then(response => response.json());

export const findAllWidgets = () =>
    fetch(`${SERVER_URL}/api/widgets`)
    .then(response => response.json()); 

export const updateWidget = (wid, widget) =>
    fetch(`${SERVER_URL}/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteWidget = (wid) =>
    fetch(`${SERVER_URL}/api/widgets/${wid}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

const api = {
    createWidget, findWidgetsForTopic, findAllWidgets, updateWidget, deleteWidget
}

export default api;