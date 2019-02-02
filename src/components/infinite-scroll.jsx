import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class InfiniteScroll extends PureComponent {
    static propTypes = {
        onScroll: PropTypes.func.isRequired,
        offset: PropTypes.number
    };

    static defaultProps = {
        offset: 100
    };

    handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - this.props.offset
        ) {
            this.props.onScroll();
        }
    };

    componentDidMount() {
        if (!window.onscroll) {
            window.onscroll = _.throttle(this.handleScroll, 300);
        }
    }

    componentWillUnmount() {
        window.onscroll = null;
    }

    render() {
        return this.props.children;
    }
}

export default InfiniteScroll;
