/* import React from 'react';
import type { FC } from 'react';
// import { Button } from 'antd';
import classNames from 'classnames';

import './index.less';

export interface ButtonProps {
  size?: 'small' | 'middle' | 'large';
  shape?: 'circle' | 'round';
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const CfcButton: FC<ButtonProps> = (props) => {
  const { children, size = 'middle', shape = 'round', type = 'default', className } = props;

  const classes = classNames(
    {
      [`btn-shape-${shape}`]: shape, // Note: Shape also has `default`
      [`btn-type-${type}`]: type,
      [`btn-size-${size}`]: size,
    },
    className,
  );

  return <button className={classes}>{children}</button>;
};
export default CfcButton; */
import React from 'react';
import type { FC } from 'react';
// 使用antd的Button和ButtonProps
// 为了不和我们的Button冲突，需要改导出名
import type { ButtonProps as AntdButtonProps } from 'antd';
import { Button as AntdButton } from 'antd';
// 引入less样式
import './index.less';

type ButtonProps = AntdButtonProps;

const Button: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  // 使用AntdButton
  return <AntdButton {...rest}>{children}</AntdButton>;
};

export default Button;
