import { Component } from 'react'

class WindowResize extends Component {
  componentWillMount () {
    window.resizeTo(
      this.props.width || window.outerWidth,
      this.props.height || window.outerHeight
    )
  }
  render () {
    return this.props.children
  }
}

export default WindowResize
