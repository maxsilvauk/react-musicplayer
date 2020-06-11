import React, { useCallback } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useStoreActions, useStoreState } from '~store/hooks';
import { formInputsToNameValueObject } from '~root/helpers/forms';
import { StyledFormHeader, StyledForm, ErrorMessageP, StyledRow } from './styles';
import { settingsPageLinks } from '../links';

export const Credentials: React.FC = () => {

  const [{ fetchApiKeys }, { setSideNavModel }] = useStoreActions(({ apiKeys, sideNav }) => [apiKeys, sideNav]);

  const formRef = React.useRef<HTMLFormElement>();
  const { isAuthenticated, error, loading } = useStoreState(({ user }) => user);
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
    // const onSuccess = () => history.replace(state?.from || '/');
    // await login({ email, password, onSuccess });
  }, []);

  React.useEffect(() => {
    setSideNavModel({ title: 'settings', activeChild: 'apiKeys', links: settingsPageLinks });
  }, []);

  return (
    <>
      <Container id="page-container">
        <StyledRow className="justify-content-md-center">
          <h1>NATIVE APP PLATFORMS</h1>
          
        </StyledRow>
        <StyledRow className="justify-content-md-center">
          <h1>UPLOAD NEW CREDENTIALS</h1>
        </StyledRow>
        <StyledRow className="justify-content-md-center">
          <Col md="auto">
            <StyledFormHeader>Apple IOS configuration</StyledFormHeader>
            <StyledForm ref={formRef}>
              <Form.Group controlId="authorization-key">
                <Form.Label>authorization key</Form.Label>
                <Form.File id="authorization-key" label="" custom />
              </Form.Group>
              <Form.Group controlId="p12-file">
                <Form.Label>production push certificate p12 file</Form.Label>
                <Form.Control
                  type="text"
                  name="p12-file"
                  placeholder="BUNDLE ID_"
                  onChange={validateForm}
                />
              </Form.Group>
              <Form.Group controlId="p12-file">
                <Form.Label>upload optional sandbox certificate</Form.Label>
                <Form.Control
                  type="text"
                  name="sandbox-certificate"
                  placeholder="TEAM ID_"
                  onChange={validateForm}
                />
              </Form.Group>
              <Row>
                {loading ? <Spinner animation="border" size="sm" /> : ""}
              </Row>
              <Row>{error && <ErrorMessageP>{error}</ErrorMessageP>}</Row>
            </StyledForm>
          </Col>
        </StyledRow>
        <StyledRow className="justify-content-md-center">
          <Col md="auto">
            <StyledFormHeader>Google android configuration</StyledFormHeader>
            <StyledForm ref={formRef}>
              <Form.Group controlId="username">
                <Form.Label>service token</Form.Label>
                <Form.File id="service-token" label="" custom />
              </Form.Group>
              <Row>
                {loading ? <Spinner animation="border" size="sm" /> : ""}
              </Row>
              <Row>{error && <ErrorMessageP>{error}</ErrorMessageP>}</Row>
            </StyledForm>
          </Col>
        </StyledRow>
      </Container>
    </>
  );
};
