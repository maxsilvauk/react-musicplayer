import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useStoreActions } from '~store/hooks'
import { user } from '~api/user'

const Dashboard: React.FC = () => {
  const { setSideNavModel } = useStoreActions(({ sideNav }) => sideNav)

  React.useEffect(() => {
    setSideNavModel({ title: 'dashboard' })
    console.log('getUserInfo', user.getUserInfo())
  }, [])

  return (
    <Container id="page-container">
      <Row></Row>
    </Container>
  )
}

export default Dashboard
