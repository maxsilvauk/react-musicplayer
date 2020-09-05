import React, { FC, useEffect, useCallback } from 'react'
import { useStoreState } from '~store/hooks'
import { Container, Row } from 'react-bootstrap'
import { useStoreActions } from '~store/hooks'
// import { user } from '~api/user'

const Dashboard: FC = () => {
  const [{ fetchUserPlaylists }, { setSideNavModel }] = useStoreActions(({ user, sideNav }) => [user, sideNav])
  const { user, playlists } = useStoreState(({ user }) => user)

  const fetchPlaylists = useCallback(async userId => {
    await fetchUserPlaylists(userId)
  }, [])

  useEffect(() => {
    fetchPlaylists(user.id)
    console.log('userPlay', playlists)
    setSideNavModel({ title: 'dashboard', activeChild: 'dashboard', playlists: {} })
  }, [])

  return (
    <Container id="page-container">
      <Row></Row>
    </Container>
  )
}

export default Dashboard
