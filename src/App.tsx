import React, { Component } from 'react';
import { Switch,Route,Redirect,NavLink } from 'react-router-dom';
import Hello from './component/hello';
import Function from './component/function';
import Counter from './pages/counter';
interface IState {
  message: string
}

class App extends Component<{}, IState>{
  public readonly state = {
    message: ""
  }
  public handleMsg = (message: string) => {
    this.setState({ message });
  }
  public render() {
    const { message } = this.state;
    return (
      <>
        <h1>{message}</h1>
        <Hello title="Hello Typescript" handleMsg={this.handleMsg} />
        <Function/>
        <NavLink to="/counter" activeClassName="active">计数</NavLink>
        <Switch>
          <Route path="/counter" component={Counter}/>
          <Redirect to="/counter"/>
        </Switch>
      </>
    );
  }
}

export default App;
