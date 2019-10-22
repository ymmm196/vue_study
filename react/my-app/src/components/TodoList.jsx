import React from 'react';
import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

import MyContext from '../context';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            datalist: [{
                id: Date.now(),
                text: '程序员节日1024，项目上线',
                done: false,
                time: '2019-10-24'
            }, {
                id: Date.now() + 1,
                text: '双11，光棍，买买买',
                done: false,
                time: '2019-11-11'
            }]
        }
        // 普通的方法默认没有this，需要在初始化时绑定this
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.completeItem = this.completeItem.bind(this)
    }
    // 添加方法
    addItem(text) {
        let { datalist } = this.state;
        let item = {
            id: Date.now(),
            text,
            done: false,
            time: Date.now()
        };

        this.setState({ datalist: [item, ...datalist] })
    }
    // 删除
    removeItem(id) {
        let { datalist } = this.state;
        datalist = datalist.filter(item => item.id !== id);
        this.setState({ datalist });
    }
    // 完成
    completeItem(id) {
        let { datalist } = this.state;
        datalist = datalist.map(item => {
            if (item.id === id) {
                item.done = true;
            }
            return item
        })
        this.setState({ datalist });
    }
    render() {
        let { datalist } = this.state;
        let { removeItem, completeItem } = this;
        return (
            <div>
                {/* 父组件：提供value */}
                <MyContext.Provider value={{ datalist, removeItem, completeItem }}>
                    <TodoForm addItem={this.addItem}></TodoForm>
                    <TodoContent></TodoContent>
                </MyContext.Provider>

            </div>
        )
    }
}

export default TodoList;