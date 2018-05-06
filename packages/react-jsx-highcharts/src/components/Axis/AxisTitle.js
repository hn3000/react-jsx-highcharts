import { Component } from 'react';
import PropTypes from 'prop-types';
import getModifiedProps from '../../utils/getModifiedProps';

class AxisTitle extends Component {

  static propTypes = {
    axisId: PropTypes.string,
    update: PropTypes.func // Provided by AxisProvider
  };

  componentDidMount () {
    const { children: text, ...rest } = this.props; // eslint-disable-line no-unused-vars
    this.updateAxisTitle({
      ...rest,
      text
    });
  }

  componentDidUpdate (prevProps) {
    const modifiedProps = getModifiedProps(prevProps, this.props, true);
    if (modifiedProps !== false) {
      this.updateAxisTitle(modifiedProps);
    }
  }

  componentWillUnmount () {
    if (this.props.getAxis()) {
      this.updateAxisTitle({
        text: null
      });
    }
  }

  updateAxisTitle = config => {
    const { getAxis, ...rest } = config;
    const axis = getAxis();
    axis.setTitle(rest, true);
  }

  render () {
    return null;
  }
}

export default AxisTitle;
