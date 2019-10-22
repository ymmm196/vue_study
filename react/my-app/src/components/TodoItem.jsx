import React from 'react';
import MyContext from '../context';
import { Button } from 'antd';
function formatDate(time) {
    return new Date(time).toLocaleDateString();
}
function TodoItem({ item, idx }) {
    return (
        <tr>
            <td>{idx + 1}</td>
            <td>{item.text}</td>
            <td>{formatDate(item.time)}</td>
            <td>{item.done ? '是' : '否'}</td>
            <td>
                <MyContext.Consumer>
                    {
                        ({ completeItem, removeItem }) => {
                            return (
                                <div>
                                    <Button type="primary" onClick={completeItem.bind(this, item.id)}>完成</Button>
                                    <Button type="danger" onClick={removeItem.bind(this, item.id)}>删除</Button>
                                    {/* <button onClick={completeItem.bind(this, item.id)}>完成</button>
                                    <button onClick={removeItem.bind(this, item.id)}>删除</button> */}
                                </div>
                            )
                        }
                    }
                </MyContext.Consumer>

            </td>
        </tr>
    )
}

export default TodoItem;