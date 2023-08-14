// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeLettersCount = event => {
    const text = event.target.value
    this.setState({count: text.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <form>
            <label className="paragraph" htmlFor="phrase">
              Enter the phrase
            </label>
            <input
              type="text"
              id="phrase"
              placeholder="Enter the phrase"
              onChange={this.onChangeLettersCount}
            />
          </form>
          <p className="count">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
