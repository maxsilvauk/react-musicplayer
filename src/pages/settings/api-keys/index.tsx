import React, { useCallback } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useStoreState, useStoreActions } from '~store/hooks';
import { settingsPageLinks } from '../links';

export const ApiKeys: React.FC = () => {
  const { keys } = useStoreState(({ apiKeys }) => apiKeys);
  const [{ fetchApiKeys }, { setSideNavModel }] = useStoreActions(({ apiKeys, sideNav }) => [apiKeys, sideNav]);
  const fetchKeys = useCallback(async () => {
    await fetchApiKeys();
  }, []);

  React.useEffect(() => {
    setSideNavModel({ title: 'settings', activeChild: 'apiKeys', links: settingsPageLinks });
    fetchKeys();
  }, []);

  return (
    <Container id="page-container">
      <Row>
        <Col sm className="offset-sm-3">
          {keys.map(apiKey => (
            <Row key={apiKey.id}>{apiKey.apiKey}</Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
