import React from 'react';

class DimensionsProvider extends React.Component {
  state = {
    containerWidth: 300,
    containerHeight: 200
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const container = document.getElementById('root');
    if (container) {
      this.setState({
        containerWidth: container.clientWidth,
        containerHeight: container.clientHeight
      });
    }
  };

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        {this.props.children({
          containerWidth: this.state.containerWidth,
          containerHeight: this.state.containerHeight,
        })}
      </div>
    );
  }
}

export default DimensionsProvider;