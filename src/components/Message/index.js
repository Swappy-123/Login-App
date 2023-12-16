// Write your code here
import './index.css'

const Message = props => {
  const {isLogged} = props
  const heading = isLogged ? 'Welcome User' : 'Please Login'
  return <h1 className="head">{heading}</h1>
}

export default Message
