import React, { useEffect, memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import { useStoreActions, useStoreState } from '~store/hooks';
import { RedirectState } from '~root/routes/privateRoute';
import { StyledRow } from './styles';
import queryString from 'query-string';

const Login: React.FC = () => {
  const history = useHistory();
  const { state } = useLocation<RedirectState>();
  const { isAuthenticated } = useStoreState(({ user }) => user);
  const [{ setUserModel },{ setSideNavModel }] = useStoreActions(({ user, sideNav }) => [user, sideNav]);

  useEffect(() => {
    if (isAuthenticated)
      history.replace(state?.from || '/dashboard');
  }, [isAuthenticated]);

  useEffect(() => {
    setSideNavModel({ title: 'login', activeChild: 'login' });
    const parsed = queryString.parse(window.location.search).access_token;
    if (parsed !== undefined)
      return () => setUserModel({ access_token: parsed, isAuthenticated: true });
  }, []);

  return (
    <Container id="page-container">
      <StyledRow className="justify-content-md-center">
        <Col md="auto"></Col>
      </StyledRow>
    </Container>
  );
};

export default memo(Login);
