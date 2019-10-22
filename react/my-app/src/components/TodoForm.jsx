import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
        }
        this.changeKeyword = this.changeKeyword.bind(this);
        this.add = this.add.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }
    changeKeyword(e) {
        this.setState({ keyword: e.target.value })
    }
    add() {
        let { keyword } = this.state;
        this.props.addItem(keyword);
        this.setState({ keyword: '' });
        this.inputDOM.focus();
    }
    handleEnter(e) {
        if (e.keyCode === 13) {
            // console.log(e);
            this.add()
        }
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    render() {
        let { keyword } = this.state;
        return (
            <div>
                {/* ref={el => { this.inputDOM = el } 绑定节点 */}
                <Input placeholder="Basic usage" ref={el => { this.inputDOM = el }}
                    value={keyword}
                    onChange={this.changeKeyword}
                    onKeyDown={this.handleEnter} />
                <Button type="primary" onClick={this.add}>添加</Button>
                {/* <button onClick={this.add}>添加</button> */}
            </div>
        )
    }

}

export default TodoForm;