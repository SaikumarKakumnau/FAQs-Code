// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClick: false}

  onClickButton = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  getRenderAnswer = () => {
    const {isClick} = this.state
    const {faqItemsList} = this.props
    const {answerText} = faqItemsList

    if (isClick) {
      return (
        <div className="answer-container">
          <hr className="separator" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  getRenderImage = () => {
    const {isClick} = this.state
    const imageUrl = isClick
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isClick ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.onClickButton}>
        <img src={imageUrl} alt={altText} className="icons" />
      </button>
    )
  }

  render() {
    const {faqItemsList} = this.props
    const {questionText} = faqItemsList

    return (
      <li className="faqs-list-item">
        <div className="item-container">
          <h1 className="question">{questionText}</h1>
          {this.getRenderImage()}
        </div>
        {this.getRenderAnswer()}
      </li>
    )
  }
}

export default FaqItem
