import React, { PureComponent } from 'react';
import posed from 'react-pose';

const AnimatedWrapper = posed.div({
    idle: { scale: 1, opacity: 0.6 },
    hovered: { scale: 1.1, opacity: 1 }
});

class Animation extends PureComponent {
    state = { hovering: false };

    render() {
        return (
            <AnimatedWrapper
                pose={this.state.hovering ? 'hovered' : 'idle'}
                onMouseEnter={() => this.setState({ hovering: true })}
                onMouseLeave={() => this.setState({ hovering: false })}
            >
                {this.props.children}
            </AnimatedWrapper>
        );
    }
}

export default Animation;
