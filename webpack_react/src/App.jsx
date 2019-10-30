import React from 'react';
import { HashRouter, BrowserRouter, Route, NavLink, Switch, withRouter, Redirect } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './App.scss';
// 引入组件
import Home from '~/Home';
import Discover from '~/Discover';
import Reg from '~/Reg';
import Login from '~/Login';
import Goods from '~/Goods';
import Cart from '~/Cart';
import Mine from '~/Mine';
// @withRouter
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            menuList: [{
                name: 'home',
                path: '/home',
                text: '首页',
                icon: 'home'
            }, {
                name: 'discover',
                path: '/discover',
                text: '分类',
                icon: 'eye'
            }, {
                name: 'cart',
                path: '/cart',
                text: '购物车',
                icon: 'shopping-cart'
            }, {
                name: 'mine',
                path: '/mine',
                text: '我的',
                icon: 'user'
            }]
        }
    }
    componentDidMount() {

        this.props.history.listen(() => {
            console.log(this.props.location.pathname);
        })
    }

    render() {
        let { menuList } = this.state;
        let { history } = this.props;
        // console.log(selected);
        return (
            <div>
                <div>
                    <Menu mode="horizontal" selectedKeys={[this.props.history.location.pathname]} onSelect={({ key }) => { history.push(key); }} >
                        {
                            menuList.map(item => <Menu.Item key={item.path} style={{ width: '25%' }}>
                                <Icon type={item.icon} />
                                {item.text}
                            </Menu.Item>)
                        }
                    </Menu>
                </div>

                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/discover" component={Discover} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />
                    <Route path="/goods/:id" component={Goods} />
                    <Redirect from="/" to="/home" exact />
                    <Route render={() => <div><h1>404</h1>页面不存在</div>} />
                </Switch>

            </div >

        )
    }

}
App = withRouter(App)
export default App;