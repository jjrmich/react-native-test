// @flow
import React, {Component} from 'react';
import {Path} from 'react-native-svg';

type Props = {
  x: number,
  y: number,
  height: number,
  width: number,
  curve: number,
  stroke: string,
  fill: string,
  strokeWidth: number,
};

class RoundedRect extends Component<Props> {
  static defaultProps = {
    x: 0,
    y: 0,
    height: 10,
    width: 10,
    curve: 5,
    stroke: 'transparent',
    fill: 'transparent',
    strokeWidth: 0,
  };
  specialRectanglePath() {
    let props = this.props;
    const topLeft = 'M ' + props.x.toString() + ' ' + props.y.toString();
    const topRight =
      'L ' + (props.x + props.width).toString() + ' ' + props.y.toString();
    const bottomRight1 =
      'L ' +
      (props.x + props.width).toString() +
      ' ' +
      (props.y + props.height - props.curve).toString();
    const bottomRight2 =
      'Q ' +
      (props.x + props.width).toString() +
      ' ' +
      (props.y + props.height).toString() +
      ' ' +
      (props.x + props.width - props.curve).toString() +
      ' ' +
      (props.y + props.height).toString();
    const bottomLeft1 =
      'L ' +
      (props.x + props.curve).toString() +
      ' ' +
      (props.y + props.height).toString();
    const bottomLeft2 =
      'Q ' +
      props.x.toString() +
      ' ' +
      (props.y + props.height).toString() +
      ' ' +
      props.x.toString() +
      ' ' +
      (props.y + props.height - props.curve);

    const result =
      topLeft +
      ' ' +
      topRight +
      ' ' +
      bottomRight1 +
      ' ' +
      bottomRight2 +
      ' ' +
      bottomLeft1 +
      ' ' +
      bottomLeft2 +
      'Z ';

    return result;
  }

  render() {
    return (
      <Path
        d={this.specialRectanglePath()}
        stroke={this.props.stroke}
        fill={this.props.fill}
        strokeWidth={this.props.strokeWidth}
      />
    );
  }
}

export default RoundedRect;
