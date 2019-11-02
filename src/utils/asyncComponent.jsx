import React, { Component } from 'react';
/**
 * @param {importComponent} 组件
 */
export default function asyncComponent(importComponent) {
    /**
     *  asyncComponent异步加载方法
     */
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();

            this.setState({ component });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}
