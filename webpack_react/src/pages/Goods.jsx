import React from 'react';
import { Card, Button } from 'antd';
import { get } from '@/Api';
import { connect } from 'react-redux';
import cartAction from '../store/action/cart';
import { bindActionCreators } from 'redux';
const mapStateToProps = ({ cart }) => {
    return {
        goodslist: cart.goodslist
    }
}
const mapDispathToProps = dispatch => {

    // return {
    //     add2cart(payload) {
    //         dispatch({ type: 'ADD_TO_CART', payload })
    //         // dispatch(Action.cart.add(payload));
    //     },
    //     changeQty(goods_id, goods_qty) {
    //         dispatch({ type: 'CHANGE_QTY', payload: { goods_id, goods_qty } })
    //         // dispatch(Action.cart.changeQty(goods_id, goods_qty));
    //     },
    //     dispatch
    // }
    return bindActionCreators(cartAction, dispatch)
}

@connect(mapStateToProps, mapDispathToProps)

export default class Goods extends React.Component {
    state = {
        goods_msg: {},
    }
    async componentDidMount() {
        // console.log(this.props);
        let { match } = this.props;
        let goods_id = match.params.id;
        let { datas } = await get({
            act: 'goods',
            op: 'goods_detail',
            goods_id,
            key: ''
        });
        // console.log(datas);
        let { goods_image, goods_info } = datas;
        this.setState({
            goods_msg: {
                ...goods_info,
                goods_image
            }
        })
        // console.log(this.state.goods_msg);
    }
    addToCart = () => {
        let { goodslist, add, changeQty } = this.props
        let { goods_name, goods_id, goods_image, goods_price } = this.state.goods_msg;

        // 判断商品是否存在购物车
        // 存在：数量+1
        // 不存在：添加到购物车
        let currentGoods = goodslist.filter(item => item.goods_id === goods_id)[0];

        if (currentGoods) {
            changeQty(goods_id, currentGoods.goods_qty + 1)
        } else {
            add({ goods_name, goods_id, goods_image, goods_price, goods_qty: 1 })

        }
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

                    <Button icon="shopping-cart" size="large" onClick={this.addToCart}>添加到购物车</Button>
                    <Button icon="shopping" type="danger" size="large">立即购买</Button>
                </Button.Group>
            </div>
        )
    }
}