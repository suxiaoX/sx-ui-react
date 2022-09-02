var _excluded = ['children'];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

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
import { Button as AntdButton } from 'antd'; // 引入less样式

import './index.css';

var Button = function Button(props) {
  var children = props.children,
    rest = _objectWithoutProperties(props, _excluded); // 使用AntdButton

  return /*#__PURE__*/ React.createElement(AntdButton, _objectSpread({}, rest), children);
};

export default Button;
