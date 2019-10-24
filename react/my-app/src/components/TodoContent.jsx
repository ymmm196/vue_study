import React from 'react';
// import { Table } from 'antd';
import TodoItem from './TodoItem';
import MyContext from '../context';
function TodoContent() {
    // console.log('TodoContent:', datalist)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>内容</th>
                        <th>时间</th>
                        <th>是否完成</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        datalist.map((item, idx) => {
                            return <TodoItem key={item.id} item={item} idx={idx} />
                        })
                    } */}
                    <MyContext.Consumer>
                        {
                            ({ datalist }) => {
                                return datalist.map((item, idx) => {
                                    return <TodoItem item={item} key={item.id} idx={idx}></TodoItem>
                                })
                            }
                        }
                    </MyContext.Consumer>
                </tbody>
            </table>

        </div>
    )
}

export default TodoContent;