import React, { useState } from 'react';

import axios from 'axios';

import { useMediaQuery } from 'react-responsive';

import '../Survey.css'

import QuestionOne from './surveyQuestions/QuestionOne';
import QuestionTwo from './surveyQuestions/QuestionTwo';
import QuestionThree from './surveyQuestions/QuestionThree';
import QuestionThreeMobile from './surveyQuestions/QuestionThreeMobile';
import WaitingScreen from './WaitingScreen';
import GiftDisplay from './GiftDisplay';
import QuestionFour from './surveyQuestions/QuestionFour';
import QuestionFourMobile from './surveyQuestions/QuestionFourMobile';

function Survey(props) {

    const windowSizeQuery = useMediaQuery({query: '(max-width: 500px)'})

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [ageInputValue, setAgeInputValue] = useState(1)
    const [isFirstRender, setIsFirstRender] = useState(true)
    const [allFree, setAllFree] = useState(true)

    const [isFirstBudgetRender, setIsFirstBudgetRender] = useState(true)
    const [surveyComplete, setSurveyComplete] = useState(false)
    const [isDoneWaiting, setIsDoneWaiting] = useState(false)

    const [age, setAge] = useState(0)
    const [interests, setInterests] = useState('')
    const [occasion, setOccasion] = useState('')
    const [occasionInputValue, setOccasionInputValue] = useState('')
    const [budget, setBudget] = useState([])

    const handleOccasionIconClick = (name) => {
        setIsFirstRender(false)
        if(name === occasion) {
            setOccasion('')
            setAllFree(true)
        } else {
            setOccasionInputValue('')
            setOccasion(name)
            setAllFree(false)
        }
    }

    const handleBudgetClick = (amount) => {
        setIsFirstBudgetRender(false)
        setBudget(amount)
    }

    const handleOccasionInputChange = (e) => {
        setOccasion('')
        setOccasionInputValue(e.target.value)
    }

    const findGifts = async () => {
        const answersObject = {
            age,
            interests: interests.split(', '),
            occasion: occasionInputValue === '' ? occasion : occasionInputValue,
            budget
        }
        try {
            const res = await axios.post('http://localhost:5000/products', answersObject)
            setSurveyComplete(true)
            console.log(res.data)
        } catch (error) {
            alert('Sorry, there is currently a network issue. Please try again later!')
            console.log(error)
        }
    }

    const questionOptions = {
        1:  <QuestionOne ageInputValue={ageInputValue} setAgeInputValue={setAgeInputValue} windowSizeQuery={windowSizeQuery} />,
        2:  <QuestionTwo interests={interests} setInterests={setInterests} windowSizeQuery={windowSizeQuery} />,
        3: windowSizeQuery ? 
        <QuestionThreeMobile occasionInputValue={occasionInputValue} allFree={allFree} isFirstRender={isFirstRender} occasion={occasion} handleOccasionIconClick={handleOccasionIconClick} handleOccasionInputChange={handleOccasionInputChange} /> :
        <QuestionThree occasionInputValue={occasionInputValue} handleOccasionInputChange={handleOccasionInputChange} allFree={allFree} isFirstRender={isFirstRender} occasion={occasion} handleOccasionIconClick={handleOccasionIconClick}/>,
        4:
        windowSizeQuery ? <QuestionFourMobile budget={budget} handleBudgetClick={handleBudgetClick} isFirstBudgetRender={isFirstBudgetRender} /> :
        <QuestionFour budget={budget} handleBudgetClick={handleBudgetClick} isFirstBudgetRender={isFirstBudgetRender} />
    }
        
    const handleNextBtnClick = () => {
        currentQuestion === 1 && setAge(ageInputValue)
    
        if (currentQuestion === 2 && interests === '') {
            alert('Please enter at least 3-5 interests before continuing.')
        } else if (currentQuestion === 3 && occasion === '' && occasionInputValue === '') {
            alert('Please select the occasion before continuing.')
        } else if (currentQuestion === 4 && budget === []) {
            alert('Please select your budget.')
        } else {
            currentQuestion !== 4 && setCurrentQuestion(currentQuestion + 1)
        }
    }

    const handleBackBtnClick = () => {
        currentQuestion !== 1 && setCurrentQuestion(currentQuestion - 1)
    }

    const questions = {
        1: 'What is his or her age?', 
        2: `What are some interests that he or she has?`,
        3: 'What is the special occasion?',
        4: 'What is your budget?'
    }

    return (
      !surveyComplete ? 
        
        <div className={windowSizeQuery ? 'surveyContainerMobile' : 'surveyContainer'}>
             <h1 style={{marginTop: currentQuestion === 3 && 10}} className='question'>{questions[currentQuestion]}</h1>
             <div className='questionContainer'>
                {questionOptions[currentQuestion]}
             </div>
            {currentQuestion === 4 && 
            <div onClick={findGifts} className='nextBtn'>
                <h3>Find Me Gifts</h3>
            </div>
            }
            {currentQuestion !== 4 && 
            <div onClick={handleNextBtnClick} className='nextBtn'>
                <h3>Next</h3>
            </div>}
            {currentQuestion !== 1 && 
            <div onClick={handleBackBtnClick} className='backBtn'>
                <h3>Back</h3>
            </div> }
        </div> 
        
        :

        !isDoneWaiting ?  
        
        <WaitingScreen setIsDoneWaiting={setIsDoneWaiting} />

        : <GiftDisplay />

    );
}

export default Survey;