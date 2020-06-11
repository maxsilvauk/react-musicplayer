import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useStoreActions, useStoreState } from '~store/hooks';
import { formInputsToNameValueObject } from '~helpers/forms';
import Logo from '~images/logo-strapline.svg';
import { ErrorMessageP, StyledForm, StyledFormHeader, LogoWrapperDiv, StyledRow } from '~pages/login/styles';

const Register: React.FC = () => {
  const history = useHistory();
  const formRef = React.useRef<HTMLFormElement>();
  const [isValid, setIsValid] = React.useState(false);
  const [{ register, setUserModel }, { setSideNavModel }] = useStoreActions(({ user, sideNav }) => [user, sideNav]);
  const { error, loading } = useStoreState(({ user }) => user);

  const validateForm = useCallback(() => {
    const inputs = formInputsToNameValueObject(formRef.current, ['email', 'oldPassword', 'newPassword', 'confirmNew']);
    const valid = !!inputs.confirmNew.length && !!inputs.email.length && !!inputs.newPassword.length && !!inputs.oldPassword.length;
    if (valid !== isValid) setIsValid(valid);
  }, []);

  const onSubmit = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const { email, oldPassword, newPassword, confirmNew } = formInputsToNameValueObject(formRef.current, ['email', 'oldPassword', 'newPassword', 'confirmNew']);
    const onSuccess = () => history.replace('/');
    await register({ email, oldPassword, newPassword, confirmNew, onSuccess });
  }, []);

  React.useEffect(() => {
    setSideNavModel({ title: 'register', activeChild: 'register' });
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
            set up new customer
          </StyledFormHeader>
          <StyledForm ref={formRef}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange={validateForm} />
            </Form.Group>
            <Form.Group controlId="old-password">
              <Form.Label>Temporary Password</Form.Label>
              <Form.Control type="password" name="oldPassword" onChange={validateForm} />
            </Form.Group>
            <Form.Group controlId="new-password">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" name="newPassword" onChange={validateForm} />
            </Form.Group>
            <Form.Group controlId="confirm-new-password">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" name="confirmNew" onChange={validateForm} />
            </Form.Group>
            <Row>
              <Button variant="primary" type="submit" onClick={onSubmit} disabled={!isValid || loading}>
                {loading ? <Spinner animation="border" size="sm" /> : 'Register'}
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

export default Register;
