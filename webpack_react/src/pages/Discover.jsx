import React, { Component } from 'react';

import { Tabs, Switch } from 'antd';
import { Route } from 'react-router-dom';

// axios请求
import Api from '@/Api';

// 分类详情的组件
import List from './List'

class Discover extends Component {
    state = {
        activeKey: '',
        menu: [],
        tabData: {
        }
    }
    // 跳转到分类详情页
    changeType = async (gc_id) => {
        let { history } = this.props;
        history.push('/discover/' + gc_id)
    }
    // ajax请求数据
    async componentDidMount() {
        let { datas } = await Api.get({
            act: 'goods_class'
        });
        // console.log(datas);
        this.setState({
            menu: datas.class_list,
            activeKey: datas.class_list[0].gc_id
        })

        this.changeType(datas.class_list[0].gc_id)

    }
    render() {
        let { menu, activeKey } = this.state;
        let { match } = this.props
        return (
            <div>
                <Tabs
                    defaultActiveKey={activeKey}
                    tabPosition='top'
                    onChange={this.changeType}
                >
                    {menu.map((item, idx) => (
                        <Tabs.TabPane tab={item.gc_name} key={item.gc_id}>
                            <Route path={match.path + "/:gc_id"} component={List} />
                        </Tabs.TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
}


export default Discover;