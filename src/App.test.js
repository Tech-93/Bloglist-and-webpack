import React from 'react'
import {
  render, waitForElement, cleanup
} from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'


describe('<App />', () => {
  afterEach(cleanup)
  test('if no user logged, blogs are not rendered', async () => {
    const component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('login')
    )

    // expectations here
    const blogs = component.container.querySelectorAll('.blog')
    expect(blogs).toHaveLength(0)
  })

  test('if user is logged, blogs are rendered', async () => {
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Donald Tester'
    }

    localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))

    const component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.container.querySelector('.blogs')
    )






    const blogs = component.container.querySelectorAll('.blogs')
    console.log(blogs)
    expect(blogs).toHaveLength(2)


  })
})