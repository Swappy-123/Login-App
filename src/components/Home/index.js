// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogged: false}
  changeMode = () => {
    this.setState(prevState => ({isLogged : !prevState.isLogged}))
  }
  render() {
    const {isLogged} = this.state
    const change = isLogged ? <Logout /> : <Login />
    return (
      <div className="bg">
        <Message isLogged={isLogged} />
        {isLogged ? (
          <Logout logout={this.changeMode} />
        ) : (
          <Login login={this.changeMode} />
        )}
      </div>
    )
  }
}

export default Home
