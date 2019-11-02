import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// asyncComponent模型用来异步加载组件
import asyncComponent from '@utils/asyncComponent';

const Home = asyncComponent(() => import(/* webpackChunkName: "home" */ '@page/home/Home.jsx'));
const About = asyncComponent(() => import(/* webpackChunkName: "about" */ '@page/about/About.jsx'));
const Topics = asyncComponent(() => import(/* webpackChunkName: "topics" */ '@page/topics/Topics.jsx'));


/**
 * 路由
 */
class RouterConfig extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about/:id" component={About} />
                    <Route path="/topics" component={Topics} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        );
    }
}
export default RouterConfig;