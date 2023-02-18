import React from 'react'
import thankIcon from '../components/assets/thankIcon.png'
import ThankCSS from './ThanksPage.module.css'

const ThanksPage = (props) => {
  return (
    <div>
      <div className={ThankCSS.thankPage}>
      <img src={thankIcon} />
        <h1 className={ThankCSS.thankText}>Thank You</h1>
        <p className={ThankCSS.cardAddedText}>We’ve added your card details</p>
        <button onClick={() => props.setThank(false)} className={ThankCSS.confirmBtn}>Continue</button>
      </div>
    </div>
  )
}

export default ThanksPage