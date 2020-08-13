import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import { useStoreActions, useStoreState } from '~store/hooks';
import { RedirectState } from '~root/routes/privateRoute';
import { StyledRow } from './styles';

const Login: React.FC = () => {
  const history = useHistory();
  const { state } = useLocation<RedirectState>();
  const { isAuthenticated } = useStoreState(({ user }) => user);
  const [
    { setUserModel },
    { setSideNavModel },
  ] = useStoreActions(({ user, sideNav }) => [user, sideNav]);

  // React.useEffect(() => {
  //   if (isAuthenticated)
  //     history.replace(state?.from || '/');
  // }, [isAuthenticated]);

  React.useEffect(() => {
    setSideNavModel({ title: 'login', activeChild: 'login' });
    // return () => setUserModel({ loading: false, error: null });
  }, []);

  return (
    <Container id="page-container">
      <StyledRow className="justify-content-md-center">
        <Col md="auto"></Col>
      </StyledRow>
    </Container>
  );
};

export default Login;
