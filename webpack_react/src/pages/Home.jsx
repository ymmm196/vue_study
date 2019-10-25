import React from 'react';
import { Carousel, Row, Col, Card } from 'antd';
import { get } from '@/Api';

class Home extends React.Component {
    state = {
        adv_list: [],
        datalist: []
    }
    async componentDidMount() {
        let { datas } = await get({
            act: 'index'
        });
        // console.log(datas);
        this.setState({
            adv_list: datas[0].adv_list.item
        })
        // console.log(this.state.adv_list);
        // 首页数据
        let datalist = datas.slice(1).map(item => item.goods);

        this.setState({
            datalist
        })
    }
    goto = (id) => {
        let { history } = this.props
        history.push(`/goods/${id}`);
    }
    render() {
        let { adv_list, datalist } = this.state
        return (
            <div>
                <div>
                    <Carousel  >
                        {
                            adv_list.map(item => {
                                return <div>
                                    <img src={item.image} style={{ width: '100%', maxHeight: 150 }} alt="" />
                                </div>
                            })
                        }

                    </Carousel>
                </div>
                <div>
                    {
                        datalist.map(item => {
                            return <div style={{ marginBottom: 24 }}>
                                <h4>{item.title}</h4>
                                <Row type="flex" >
                                    {
                                        item.item.map(item => {
                                            return <Col span={12} onClick={this.goto.bind(this, item.goods_id)}>
                                                <Card
                                                    hoverable
                                                    style={{ width: 200 }}
                                                    cover={<img alt="example" src={item.goods_image} />}
                                                >
                                                    <Card.Meta title={item.goods_name} description={item.goods_price} />
                                                </Card>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </div>
                        })
                    }
                </div>

            </div>
        )
    }
}
export default Home;