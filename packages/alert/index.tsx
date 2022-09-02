import React from 'react';
import type { FC } from 'react';
import type { AlertProps as AntdAlertProps } from 'antd';
import { Alert as AntdAlert } from 'antd';

import './src/style/index.less';

type AlertProps = AntdAlertProps;

const Alert: FC<AlertProps> = (props) => {
  const { children, ...rest } = props;
  // 使用AntdAlert
  return <AntdAlert {...rest}>{children}</AntdAlert>;
};

export default Alert;
