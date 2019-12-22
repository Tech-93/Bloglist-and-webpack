const blogs = [

  {
    url: 'www.Satair.com',
    title: 'Bonnfire',
    author: 'Gideon',
    likes: 39,
    user: [{
      username: 'fartface',
      name: 'Amanda',
      id: '5dd03f94c380a51c59b26310'
    }],
    id: '5dd04005c380a51c59b26311'
  },
  {
    url: 'www.Manchester.com',
    title: 'Halloween',
    author: 'Mathew',
    likes: 11,
    user: [{
      username: 'fartface',
      name: 'Amanda',
      id: '5dd03f94c380a51c59b26310'
    }],
    id: '5dd43407a48ad566785600e7'
  }

]

let token = null

const setToken = newToken => {
  token = 'bearer ' + newToken
}

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll, setToken, blogs }