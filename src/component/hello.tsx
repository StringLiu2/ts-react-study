import React, { Component } from 'react';
import { Button, Input } from 'antd';
interface State {
    name: string,
    value: string,
    [name: string]: number | string
}
interface Props {
    title: string;
    content?: string;
    handleMsg: Function;
}
export default class Hello extends Component<Props, State>{
    public constructor(props: Props) {
        super(props);
    }
    //只读属性只能读
    public readonly state = {
        name: "Hello",
        value: ""
    }
    private handleClick = () => {
        const { handleMsg } = this.props;
        const { value } = this.state;
        if (!value) return;
        this.setState({ name: value });
        handleMsg(value);
    }
    private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.value);
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }
    public render() {
        const { title } = this.props;
        const { name, value } = this.state;
        return (
            <>
                <h2>{title}</h2>
                <p>{name}</p>
                <p>value: {'  ' + value}</p>
                <Input onChange={this.handleChange} value={value} name="value" />{/* 需要设置name*/}
                <Button onClick={this.handleClick}>改变name</Button>
            </>
        );
    }
}