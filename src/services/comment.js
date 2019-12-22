import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'

const comment = async (id, newComment) => axios.post(baseUrl + `/${id}/comments`, newComment )

export default { comment }

