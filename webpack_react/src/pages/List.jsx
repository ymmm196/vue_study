import React, { Component } from 'react';

import { Tabs, Row, Col, Pagination } from 'antd';

import Api from '@/Api';

class List extends Component {
    state = {
        category: [],
        datalist: [],
        page_total: 1,
    }
    changeType = async (gc_id) => {
        // console.log(gc_id)
        let { datas, page_total } = await Api.get({
            act: 'goods',
            op: 'goods_list',
            gc_id,
            page: 10,
            curpage: 1
        });
        // console.log(datas);
        // console.log(page_total);
        let { goods_list: datalist } = datas;
        // console.log(datalist)
        this.setState({
            datalist,
            page_total
        })

    }
    goto = (id) => {
        let { history } = this.props;
        history.push('/goods/' + id)
    }
    async componentDidMount() {
        let { match } = this.props;
        let { gc_id } = match.params;

        let { datas } = await Api.get({
            act: 'goods_class',
            op: 'get_child_all',
            gc_id
        });

        let category = datas.class_list[0].child;

        this.setState({
            category
        });

        // 手动请求第一个tab内容
        this.changeType(datas.class_list[0].child[0].gc_id)
    }
    render() {
        let { category, datalist, page_total } = this.state;
        // console.log('render', datalist)
        return (
            <div style={{ paddingRight: 20 }}>
                <Tabs
                    tabPosition='left'
                    style={{ height: 600, overflowY: 'auto' }}
                    onChange={this.changeType}
                >
                    {
                        category.map(item => (
                            <Tabs.TabPane tab={item.gc_name} key={item.gc_id}>
                                <Row gutter={20}>
                                    {
                                        datalist.map(goods => {
                                            return <Col
                                                key={goods.goods_id}
                                                style={{ minHeight: 280 }}
                                                xs={12}
                                                sm={8}
                                                md={6}
                                                onClick={this.goto.bind(this, goods.goods_id)}
                                            >
                                                <img src={goods.goods_image_url} style={{ width: '100%' }} />
                                                <h5>{goods.goods_name}</h5>
                                                <p className="price">
                                                    <del>{goods.goods_price}</del>
                                                    <span>{goods.goods_promotion_price}</span>
                                                </p>
                                            </Col>
                                        })
                                    }
                                </Row>

                            </Tabs.TabPane>
                        ))
                    }
                </Tabs>
                <Pagination
                    defaultCurrent={1}
                    size="small"
                    total={page_total}
                    showTotal={total => `共${total}件商品`}
                    showSizeChanger

                />
            </div>
        )
    }
}

export default List;