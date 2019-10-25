import React from 'react';
import { Card, Button } from 'antd';
import { get } from '@/Api';

export default class Goods extends React.Component {
    state = {
        goods_msg: {},
    }
    async componentDidMount() {
        console.log(this.props);
        let { match } = this.props;
        let goods_id = match.params.id;
        let { datas } = await get({
            act: 'goods',
            op: 'goods_detail',
            goods_id,
            key: ''
        });
        console.log(datas);
        let { goods_image, goods_info } = datas;
        this.setState({
            goods_msg: {
                ...goods_info,
                goods_image
            }
        })
        console.log(this.state.goods_msg);
    }
    render() {
        let { goods_msg } = this.state;
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img alt="example" src={goods_msg.goods_image} />}
                >
                    <Card.Meta title={goods_msg.goods_name} description={goods_msg.goods_price} />
                </Card>
                <Button.Group>

                    <Button icon="shopping-cart" size="large">添加到购物车</Button>
                    <Button icon="shopping" type="danger" size="large">立即购买</Button>
                </Button.Group>
            </div>
        )
    }
}