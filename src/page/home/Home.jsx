import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../../component/Main.jsx';
import { saveFormData } from '@store/home/action';
import { connect } from 'react-redux';
import './Home.scss';
/**
 * Home
 */
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.params = 'aaa';
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        
        let defaultState = {
            orderSum: '11.1', //金额
            name: 'zhansan', //姓名
            phoneNo: '15707979797', //手机号
            imgpath: 'www.baidu.com' //图片地址
        };
        this.props.saveFormData(defaultState);
        console.log(this.props.formData);
    }

    render() {
        return (
            <div>
                <h1>
                    <Main />
                </h1>
                <ul>
                    <li>
                        <Link to={`/about/${this.params}`}>About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                    <li>
                        <button className="btn" onClick={this.handleClick}>
                            click me！
                        </button>
                    </li>
                    <div>{this.props.formData.orderSum}</div>
                    <div>{this.props.formData.name}</div>
                    <div>{this.props.formData.phoneNo}</div>
                    <div>{this.props.formData.imgpath}</div>
                </ul>
            </div>
        );
    }
}
export default connect(
    state => ({
        formData: state.formData
    }),
    {
        saveFormData
    }
)(Home);
