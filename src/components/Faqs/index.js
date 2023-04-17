// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="main-heading">FAQs</h1>
        <ul className="faqs-list-container">
          {faqsList.map(eachItem => (
            <FaqItem key={eachItem.id} faqItemsList={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
