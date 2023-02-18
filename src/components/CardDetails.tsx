import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import CardDetailsCSS from './CardDetails.module.css'
import cardBackPng from './assets/bg-card-back.png'
import cardFrontPng from './assets/bg-card-front.png'
import visaCard from '../components/assets/visa.png'
import mastercard from '../components/assets/mastercard.png'
import ThanksPage from './ThanksPage';


interface cardTypes {
    cardNumbers?: string | undefined;
    setCardNumbers? : React.Dispatch<React.SetStateAction<cardTypes> | void>
}  

const CardDetails = (props:cardTypes) => {
    const [cardNumbers, setCardNumbers] = useState('1234 5678 9000 0000')
    const [name , setName] = useState('JANE APPLESEED')
    const [month, setMonth] = useState('00')
    const [year, setYear] = useState('00')
    const [cvc, setCvc] = useState('123')
    const [visa, setVisa] = useState(false)
    const [thank, setThank] = useState(false)

const handleAddNumbers = (e:React.ChangeEventHandler<HTMLInputElement | undefined> ) => {
    if(typeof e.target.value !== Number){
        console.log(e.target.value)
    }

    if(e.target.value === "4000") {
        setVisa(true)
    }else if(e.target.value === "5"){
        setVisa(false)
    }
    setCardNumbers(e.currentTarget.value)
}

const handleAddMonth = (e:number | string) => {
    const min = 1;
    const max = 12;

    const value:number= Math.max(min, Math.min(max,Number(e.target.value)))
    setMonth(value)
}

const handleAddYear = (e:number | string) => {
    const min = 23;
    const max = 33;

    const value : React.SetStateAction<string> | number = Math.max(min, Math.min(max, Number(e.target.value)))
    setYear(value)
}

const handleAddCvc = (e: React.ChangeEventHandler<HTMLInputElement> | void) => {
    setCvc(e?.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    setThank(true)
}

  return (
    <div>
        <div>
                    <CardFrontDiv>
                <img src={cardFrontPng} /> 
                <div>
                    <img src={visa ? visaCard : mastercard} className={CardDetailsCSS.cardRoundDivForLogo} />
                </div>
                <div className={CardDetailsCSS.cardRoundMiniDiv}></div>
                <div className={CardDetailsCSS.cardFrontNumber}>{cardNumbers}</div>
                <div>
                    <div className={CardDetailsCSS.cardFronName}>{name}</div>
                    <div className={CardDetailsCSS.cardFrontDate}>{month}/{year}</div>
                </div>

            </CardFrontDiv> 
            <CardBackDiv>
                <img src={cardBackPng} />
                <div className={CardDetailsCSS.cvcCode}>{cvc}</div>
            </CardBackDiv>

        </div>
        {
            thank 
            ?
            <ThanksPage setThank={setThank} />

            :
        <form className={CardDetailsCSS.form} onSubmit={handleSubmit}>
            <>
            <p className={CardDetailsCSS.p}>Cardholder Name</p>
            <input placeholder='e.g. Jane Appleseed' type='text' className={CardDetailsCSS.input} onChange={(e) => {
                setName(e.target.value)
            }}/>
            </>
            <>
            <p className={CardDetailsCSS.p}>Card Number</p>
            <input type='text' placeholder='e.g. 1234 5678 9123 0000' className={CardDetailsCSS.input}  onChange={handleAddNumbers} maxLength={19} value={cardNumbers.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()}/>
            </>
            <div className={CardDetailsCSS.miniDivFlexBox}>
                <div>
                <p className={CardDetailsCSS.p}>Exp. Date (MM/YY)</p>
                <div>
                    <input placeholder='MM' className={CardDetailsCSS.miniInput} maxLength={2} required onChange={handleAddMonth} />
                    <input placeholder='YY' className={CardDetailsCSS.miniInput} maxLength={2} required onChange={handleAddYear}/>
                </div>
                </div>
                <div>
                <p className={CardDetailsCSS.p}>CVC</p>
                <input placeholder='e.g. 123' className={CardDetailsCSS.cvc} maxLength={3} onChange={handleAddCvc}/>
                </div>
            </div>
            <button className={CardDetailsCSS.btn}>Confirm</button>
        </form>
        }
    </div>
  )
}

export default CardDetails


const CardFrontDiv = styled.div(
    (props) => css`
    height: 245px;
    width: 447px;
    border-radius: 10px;
    background: linear-gradient(163.95deg, #6348FE 4.74%, #610595 88.83%);
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    position: absolute;
    top: 186px;
    left: 224px;
    z-index: 1;
    `
    ) 
    
    
    
    const CardBackDiv = styled.div(
        (props) => css`
        height: 245px;
        width: 447px;
        border-radius: 10px;
        background: linear-gradient(168.73deg, #FFFFFF 5%, #D2D3D9 91.69%);
        border-radius: 10px;
        position: absolute;
        top: 486px;
        left: 254px;
        z-index: 1;

    `  
) 