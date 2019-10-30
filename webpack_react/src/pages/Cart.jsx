import React from 'react';
import { List, Icon, InputNumber, Checkbox, Tooltip, Divider, Row, Col, Button } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cartAction from '../store/action/cart';
// 将state注入 props
const mapStateToProps = ({ cart }) => ({
    //将state中购物车页面的goodslist数据映射到props
    goodslist: cart.goodslist,
    totalPrice: cart.goodslist.reduce((prev, item) => prev + item.goods_qty * item.goods_price, 0)
})
const mapDispatchToProps = dispatch => {
    // return {
    //     changeQty(goods_id, goods_qty) {
    //         // console.log(goods_id, goods_qty);
    //         // dispatch({
    //         //     type: 'CHANGE_QTY',
    //         //     payload: {
    //         //         goods_id, goods_qty
    //         //     }
    //         // })
    //         dispatch(cartAction.changeQty(goods_id, goods_qty))
    //     },
    //     removeItem(goods_id) {
    //         // dispatch({
    //         //     type: 'REMOVE_FROM_CART',
    //         //     payload: goods_id
    //         // })
    //         // dispatch(cartAction.remove(goods_id))
    //     },
    //     clearCart() {
    //         // dispatch({
    //         //     type: 'CLEAR_CART'
    //         // })

    //     }
    // }
    // 利用redux的bindActionCreators把ActionCreator中的所有方法(export default中的方法)绑定到组件props并自动隐式调用dispatch(action)
    return bindActionCreators(cartAction, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)

class Cart extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        let { goodslist, totalPrice, remove, changeQty, clear } = this.props;
        return (
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={goodslist}
                    renderItem={item => (
                        <List.Item actions={[
                            <Tooltip title="删除商品">
                                <Icon type="delete"
                                    style={{ color: '#f00' }}
                                    onClick={remove.bind(this, item.goods_id)}
                                />
                            </Tooltip>]}>
                            <List.Item.Meta
                                avatar={<div><Checkbox onChange={this.onChange} style={{ marginRight: 20, marginLeft: 5 }}></Checkbox> <img src={item.goods_image} style={{ width: 100 }} /></div>
                                }
                                title={item.goods_name}
                                description={<div className="price">
                                    <span>{item.goods_price}</span>
                                    <Icon type="close" style={{ fontSize: 10, marginRight: 5 }} />
                                    <InputNumber
                                        size="small"
                                        min={1}
                                        max={10}
                                        value={item.goods_qty}
                                        onChange={changeQty.bind(this, item.goods_id)}
                                    />
                                </div>}
                            />
                        </List.Item>
                    )}
                />
                {/* <Divider /> */}
                <Row>
                    <Col span={12}>
                        <Button type="danger" icon="delete" onClick={clear}>清空购物车</Button>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        总价：<span className="price"><span>{totalPrice}</span></span><Button type="primary">结算</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Cart;