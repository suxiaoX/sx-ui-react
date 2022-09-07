import Alert from '@micfc/alert/src';
import React from 'react';

const IconAlert: React.FC = () => (
  <>
    <Alert message="Success Tips" type="success" showIcon />
    <Alert message="Informational Notes" type="info" showIcon />
    <Alert message="Warning" type="warning" showIcon closable />
    <Alert message="Error" type="error" showIcon />
  </>
);

export default IconAlert;
