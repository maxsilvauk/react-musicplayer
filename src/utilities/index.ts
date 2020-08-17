import { useContext } from 'react'
import queryString from 'query-string'
import { AuthContext } from '~context/authContext'

export const getAccessToken = () => {
  const token = queryString.parse(window.location.search).access_token
  return token ? token : null
}

export const CheckedAuthed = () => {
  const [authContext, dispatch] = useContext(AuthContext)

  console.log('we awdawd')
  const token = getAccessToken()

  const data = {
    isAuthed: true,
    accessToken: token,
    time: Date(),
  }

  if (token) {
    dispatch({
      type: 'update',
      payload: data,
    })

    localStorage.setItem('authedData', JSON.stringify(data))
  }
}
