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

    handleScroll = _.throttle(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - this.props.offset
        ) {
            this.props.onScroll();
        }
    }, 300);

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return this.props.children;
    }
}

export default InfiniteScroll;
