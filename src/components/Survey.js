import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import '../Survey.css'

import axios from 'axios';
import validator from 'validator';

import QuestionTwo from './surveyQuestions/QuestionTwo';
import QuestionOne from './surveyQuestions/QuestionOne'
import QuestionThree from './surveyQuestions/QuestionThree';
import QuestionFour from './surveyQuestions/QuestionFour';
import QuestionFourMobile from './surveyQuestions/QuestionFourMobile';
import WaitingScreen from './WaitingScreen';
import GiftDisplay from './GiftDisplay';
import GetEmail from './surveyQuestions/GetEmail';

function Survey() {

    const windowSizeQuery = useMediaQuery({query: '(max-width: 500px)'})

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [ageInputValue, setAgeInputValue] = useState(1)
    const [isFirstRender, setIsFirstRender] = useState(true)
    const [allFree, setAllFree] = useState(true)

    const [isFirstGenderRender, setIsFirstGenderRender] = useState(true)
    const [surveyComplete, setSurveyComplete] = useState(false)
    const [isDoneWaiting, setIsDoneWaiting] = useState(false)
    const [isRequestSuccessful, setIsRequestSuccessful] = useState(null)
    const [error, setError] = useState('')

    const [age, setAge] = useState(0)
    const [gender, setGender] = useState('')
    const [interests, setInterests] = useState('')
    const [occasion, setOccasion] = useState('')
    const [occasionInputValue, setOccasionInputValue] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')

    const [productsObject, setProductsObject] = useState({})

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

    const handleOccasionInputChange = (e) => {
        setOccasion('')
        setOccasionInputValue(e.target.value)
    }

    const handleFirstNameInputChange = (e) => {
        setFirstName(e.target.value)
    }
    
    const handleEmailInputChange = (e) => {
        setEmail(e.target.value)
    }

    const handleGenderClick = (gender) => {
        setIsFirstGenderRender(false)
        setGender(gender)
    }

    const findGifts = async () => {
            if (firstName === '') {
                setError('Please enter both your first name and email address')
                setTimeout(() => {
                    setError('')
                }, 3000);
            }
             else {

                if (!validator.isEmail(email)) {
                    setError('Please enter a valid email address so we can send you your gift ideas!')
                setTimeout(() => {
                    setError('')
                    }, 4000);
                } else {

                const answersObject = {
                    age,
                    gender,
                    interests: interests.split(', '),
                    occasion: occasionInputValue === '' ? occasion : occasionInputValue,
                    firstName, 
                    email
                }
        
                try {
                    setSurveyComplete(true)
                    const res = await axios.post('http://localhost:5000/products', answersObject)
                    if (res.status === 200) {
                        setIsRequestSuccessful(true)
                        setProductsObject(res.data)
                    } 
                } catch (error) {
                    setIsRequestSuccessful(false)
                    console.log(error)
                }
            }
        }
        }

    const questionOptions = {
        1:  <QuestionOne handleGenderClick={handleGenderClick} gender={gender} isFirstGenderRender={isFirstGenderRender} />,
        2:  <QuestionTwo setAge={setAge} ageInputValue={ageInputValue} setAgeInputValue={setAgeInputValue} windowSizeQuery={windowSizeQuery} />,
        3:  <QuestionThree interests={interests} setInterests={setInterests} windowSizeQuery={windowSizeQuery} />,
        4:  windowSizeQuery ? 
            <QuestionFourMobile occasionInputValue={occasionInputValue} allFree={allFree} isFirstRender={isFirstRender} occasion={occasion} handleOccasionIconClick={handleOccasionIconClick} handleOccasionInputChange={handleOccasionInputChange} /> :
            <QuestionFour occasionInputValue={occasionInputValue} handleOccasionInputChange={handleOccasionInputChange} allFree={allFree} isFirstRender={isFirstRender} occasion={occasion} handleOccasionIconClick={handleOccasionIconClick}/>,
        5: <GetEmail handleEmailInputChange={handleEmailInputChange} handleFirstNameInputChange={handleFirstNameInputChange} />
    }
        
    const handleNextBtnClick = () => {
     if (currentQuestion === 1 && gender === '') {
        setError('Please select a gender')
        setTimeout(() => {
            setError('')
        }, 1500);
    } else if (currentQuestion === 2 && (ageInputValue === 0 || ageInputValue === '')) {
        setError('Please enter a valid age')
        setTimeout(() => {
            setError('')
        }, 1500);
    }
        else if (currentQuestion === 3 && interests.trim() === '') {
            setError('Please enter a couple of interests')
            setTimeout(() => {
                setError('')
            }, 2500);
        } else if (currentQuestion === 4 && occasion === '' && occasionInputValue === '') {
            setError('Please select an occasion')
            setTimeout(() => {
                setError('')
            }, 1500);
        } 
        else {
            currentQuestion !== 5 && setCurrentQuestion(currentQuestion + 1)
        }
    }

    const handleBackBtnClick = () => {
        currentQuestion !== 1 && setCurrentQuestion(currentQuestion - 1)
    }

    const questions = {
        1: 'What is his or her gender?',
        2: `What is ${gender === 'male' ? 'his' : 'her'} age?`, 
        3: `What are some interests that ${gender === 'male' ? 'he' : 'she'} has?`,
        4: 'What is the special occasion?',
        5: 'Where should we send your gift list to?'
    }

    return (
      !surveyComplete ? 
        
        <div className={windowSizeQuery ? 'surveyContainerMobile' : 'surveyContainer'}>
             <h1 style={{marginTop: currentQuestion === 3 && 10}} className={error ? 'questionError' : 'question'}>{!error ? questions[currentQuestion]: error}</h1>
             <div className='questionContainer'>
                {questionOptions[currentQuestion]}
             </div>
            {currentQuestion === 5 && 
            <div onClick={findGifts} className='nextBtn'>
                <h3>Find Me Gifts</h3>
            </div>
            }
            {currentQuestion !== 5 && 
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
        
        <WaitingScreen isRequestSuccessful={isRequestSuccessful} setIsDoneWaiting={setIsDoneWaiting} />

        :  <GiftDisplay productsObject={productsObject} />

    );
}

export default Survey;