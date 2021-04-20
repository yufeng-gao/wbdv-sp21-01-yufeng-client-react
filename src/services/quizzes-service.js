const QUIZZES_URL = 'https://wbdv-sp21-yufeng-server-node.herokuapp.com/api/quizzes';
const findAllQuizzes = () =>
    fetch(QUIZZES_URL)
        .then(response => response.json())

const findQuizById = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())

const submitQuiz = (quizId, questions) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const findQuizAttempts = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`)
        .then(response => response.json())
}

const api = {
    findAllQuizzes, findQuizById, submitQuiz, findQuizAttempts
}

export default api