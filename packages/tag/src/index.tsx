import React from 'react';
import type { FC } from 'react';
import type { TagProps as AntdTagProps } from 'antd';
import { Tag as AntdTag } from 'antd';

import './index.less';

type AlertProps = AntdTagProps;

const Tag: FC<AlertProps> = (props) => {
  const { children, ...rest } = props;
  // 使用AntdAlert 导出原来的名字
  return <AntdTag {...rest}>{children}</AntdTag>;
};

export default Tag;
