import React from 'react';
import PropTypes from 'prop-types';
import { getProData } from '@store/about/action';
import { connect } from 'react-redux';
/**
 * About
 */
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: '', paramsId: '' };
    }
    componentDidMount() {
        this.setState({ id: this.props.match.params.id });
        if(!this.props.proData.dataList.length){
            this.props.getProData();
          }
    }
    render() {
        return (
            <div>
                <h2>About</h2>
                <h4>{this.state.id}</h4>
                <ul>
                    <h2>商品</h2>
                    {this.props.proData.dataList.map((item, index) => {
                        return (
                            <li key={index}>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

About.propTypes = {
    match: PropTypes.object
};

export default connect(
    state => ({
        proData: state.proData
    }),
    {
        getProData
    }
)(About);
