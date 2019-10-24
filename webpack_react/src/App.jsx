import React from 'react';
import { HashRouter, BrowserRouter, Route, NavLink, Switch, withRouter, Redirect } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
// 引入组件
import Home from './pages/Home.jsx';
import Discover from './pages/Discover.jsx';
import Reg from './pages/Reg.jsx';
import Login from './pages/Login.jsx';

// function FormattedDate(props) {
//     return <h2>现在是{props.date.toLocaleTimeString()}.</h2>
// }
// class Clock extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() }
//     }
//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000);
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//     tick() {
//         this.setState({ date: new Date() });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello,World!</h1>
//                 <FormattedDate date={this.state.date}></FormattedDate>
//             </div>
//         )
//     }
// }

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: 0 };
        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber() {
        this.setState({ data: this.state.data + 1 })
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}


class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!:' + newProps)
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!：' + nextProps + nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!:' + prevProps, prevState)
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
// @withRouter
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: ['/home'],
            menuList: [{
                name: 'home',
                path: '/home',
                text: '首页',
                icon: 'home'
            }, {
                name: 'discover',
                path: '/discover',
                text: '发现',
                icon: 'eye'
            }, {
                name: 'reg',
                path: '/reg',
                text: '注册',
                icon: 'user-add'
            }, {
                name: 'login',
                path: '/login',
                text: '登录',
                icon: 'login'
            }]
        }
    }
    render() {
        let { menuList, selected } = this.state;
        let { history } = this.props;
        return (
            <div>

                <Menu mode="horizontal" selectedKeys={selected} onSelect={({ key }) => { history.push(key); this.setState({ selected: [key] }) }}>
                    {
                        menuList.map(item => <Menu.Item key={item.name}>
                            <Icon type={item.icon} />
                            {item.text}
                        </Menu.Item>)
                    }

                </Menu>
                <ul>
                    {
                        menuList.map(item => <li key={item.name}>
                            <NavLink to={item.path} activeStyle={{ color: '#58bc58', fontWeight: 800 }}>{item.text}</NavLink>
                        </li>)
                    }
                </ul>


                <Button></Button>

                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/discover" component={Discover} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />
                    <Redirect from="/" to="/home" exact />
                    <Route render={() => <div><h1>404</h1>页面不存在</div>} />
                </Switch>

            </div >

        )
    }

}
App = withRouter(App)
export default App;