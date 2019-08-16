import React, { Component } from 'react';
interface ListProps{
    history:{
        push:Function,
        replace:Function
    };
    match:{
        path:string,
        url:string,
        params:{}
    }
}
interface Post {
    id: number;
    body: string;
    title: string;
    userId: number;
}
interface ListState {
    posts: [];
}
export default class List extends Component<ListProps,ListState>{
    public constructor(props:ListProps){
        super(props);
        this.state = {
            posts:[]
        }
    }
    public async componentDidMount() {
        const res = await fetch("http://jsonplaceholder.typicode.com/posts").then(res => res.json());
        this.setState({ posts: res })
    }
    public render() {
        const { posts } = this.state;
        if (posts.length <= 0) return <h2>数据正在请求中...</h2>;
        const liList = posts.map((post: Post) =>
            <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p>用户id:{post.userId}</p>
            </li>);
        return (
            <ul>
                {liList}
            </ul>
        );
    }
}