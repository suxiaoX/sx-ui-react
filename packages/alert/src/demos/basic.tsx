import React from 'react';
import Alert from '@micfc/alert';

const Basic: React.FC = () => (
  <>
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </>
);

export default Basic;
