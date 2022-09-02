import type { FC } from 'react';
import type { AlertProps as AntdAlertProps } from 'antd';
import './index.less';
interface AlertProps extends AntdAlertProps {}
declare const Alert: FC<AlertProps>;
export default Alert;
