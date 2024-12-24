import React from 'react';

// Simple dimensions provider without external dependency
class DimensionsProvider extends React.Component {
  state = {
    containerWidth: 300,  // Default width
    containerHeight: 200  // Default height
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