import type { FC } from 'react';
import type { ButtonProps as AntdButtonProps } from 'antd';
import './index.less';
interface ButtonProps extends AntdButtonProps {}
declare const Button: FC<ButtonProps>;
export default Button;
