import React, {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showSecondName: false,
    para: {
      width: '200px',
      height: '150px',
      backgroundColor: 'white',
      color: 'black',
      display: 'hide', // Changed 'show' to 'block'
    },
  }

  toggleFirstName = () => {
    this.setState(prevState => ({
      showFirstName: !prevState.showFirstName,
    }))
  }

  toggleSecondName = () => {
    this.setState(prevState => ({
      showSecondName: !prevState.showSecondName,
    }))
  }

  render() {
    const {showFirstName, showSecondName, para} = this.state

    return (
      <div className="box">
        <h1>Show / Hide</h1>
        <div className="main">
          <div className="part">
            <button className="btn" onClick={this.toggleFirstName}>
              Show/hide FirstName
            </button>
            {showFirstName && <p style={para}>Joe</p>}
          </div>
          <div className="part">
            <button className="btn" onClick={this.toggleSecondName}>
              Show/Hide Lastname
            </button>
            {showSecondName && <p style={para}>Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
