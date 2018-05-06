import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axis from '../Axis';

class XAxis extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    getChart: PropTypes.func.isRequired // Provided by ChartProvider
  };

  static defaultProps = {
    id: 'xAxis'
  };

  render () {
    let { getChart, ...rest } = this.props;
    const chart = getChart();
    const type = (chart.getType() === 'stockChart') ? 'datetime' : 'linear';

    return (
      <Axis type={type} {...rest} isX />
    );
  }
}

export default XAxis;
