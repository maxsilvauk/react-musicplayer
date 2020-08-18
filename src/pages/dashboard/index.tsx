import React from 'react'
import queryString from 'query-string'
import { Container, Row } from 'react-bootstrap'
import { useStoreActions } from '~store/hooks'

const Dashboard: React.FC = () => {
  const { setSideNavModel } = useStoreActions(({ sideNav }) => sideNav)

  React.useEffect(() => {
    setSideNavModel({ title: 'dashboard' })
  }, [])

  return (
    <Container id="page-container">
      <Row></Row>
    </Container>
  )
}

export default Dashboard
