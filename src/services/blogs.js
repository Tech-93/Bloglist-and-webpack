import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}


const create = async newObject => {

  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const createComment = async (id, object) => {
  const response = await axios.post(baseUrl + `/${id}/comments`, object )
  return response.data
}

const update = (id, object) => axios.put(baseUrl + '/' + id, object)

const remove = id => {

  const config = {
    headers: { Authorization: token },
  }

  axios.delete(baseUrl + '/' + id, config)
}

export default { getAll, create, setToken, update, remove, createComment  }