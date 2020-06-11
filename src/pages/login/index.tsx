import React, { useCallback } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useStoreActions, useStoreState } from '~store/hooks';
import { RedirectState } from '~root/routes/privateRoute';
import { formInputsToNameValueObject } from '~root/helpers/forms';
import Logo from '~images/logo-strapline.svg';
import { StyledFormHeader, LogoWrapperDiv, StyledForm, StyledEye, ErrorMessageP, StyledRow } from './styles';

const Login: React.FC = () => {
  const history = useHistory();
  const { state } = useLocation<RedirectState>();
  const formRef = React.useRef<HTMLFormElement>();
  const { isAuthenticated, error, loading } = useStoreState(({ user }) => user);
  const [{ login, setUserModel }, { setSideNavModel }] = useStoreActions(({ user, sideNav }) => [user, sideNav]);
  const [isValid, setIsValid] = React.useState(false);

  const validateForm = useCallback(() => {
    const inputs = formInputsToNameValueObject(formRef.current, ['email', 'password']);
    const valid = !!inputs.email.length && !!inputs.password.length;
    if (valid !== isValid) setIsValid(valid);
  }, []);

  const onSubmit = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const { password, email } = formInputsToNameValueObject(formRef.current, ['email', 'password']);
    const onSuccess = () => history.replace(state?.from || '/');
    await login({ email, password, onSuccess });
  }, []);

  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = useCallback(() => setShowPassword(!showPassword), [showPassword]);

  React.useEffect(() => {
    if (isAuthenticated)
      history.replace(state?.from || '/');
  }, [isAuthenticated]);

  React.useEffect(() => {
    setSideNavModel({ title: 'login', activeChild: 'login' });
    return () => setUserModel({ loading: false, error: null });
  }, []);

  return (
    <Container id="page-container">
      <StyledRow className="justify-content-md-center">
        <Col md="auto">
          <LogoWrapperDiv>
            <Logo />
          </LogoWrapperDiv>
          <StyledFormHeader>
            log in to your pushologies account
          </StyledFormHeader>
          <StyledForm ref={formRef}>
            <Form.Group controlId="username">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange={validateForm} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <StyledEye onClick={togglePassword} active={showPassword ? 1 : 0} />
              <Form.Control type={showPassword ? 'text' : 'password'} name="password" onChange={validateForm} />
            </Form.Group>
            <Link className="forgot-password" to="/forgot-password">
              Forgotten your password?
            </Link>
            <Row>
              <Button variant="primary" onClick={onSubmit} disabled={!isValid}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Log In'}
              </Button>
            </Row>
            <Row>
              {error && <ErrorMessageP>{error}</ErrorMessageP>}
            </Row>
          </StyledForm>
        </Col>
      </StyledRow>
    </Container>
  );
};

export default Login;
