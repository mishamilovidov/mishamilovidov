import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

class GAListener extends Component {
  static contextTypes = {
    router: PropTypes.object	
  };

  componentDidMount() {
		const { history } = this.props;

    this.sendPageView(history.location);
    history.listen(this.sendPageView);
  }

  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(GAListener);
