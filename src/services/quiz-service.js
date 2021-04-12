const QUIZZES_URL = 'https://wbdv-sp21-yufeng-server-node.herokuapp.com/api/quizzes';
const findAllQuizzes = () => 
    fetch(QUIZZES_URL)
        .then(response => response.json())

const findQuizById = (qid) => 
    fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())


const api = {
    findAllQuizzes, findQuizById
}

export default api