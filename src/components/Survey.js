import React, { useState, useRef } from 'react';

import { useMediaQuery } from 'react-responsive';

import ReCAPTCHA from 'react-google-recaptcha';

import '../css/Survey.css'

import axios from 'axios';
import validator from 'validator';

import QuestionTwo from './surveyQuestions/QuestionTwo';
import QuestionOne from './surveyQuestions/QuestionOne'
import QuestionThree from './surveyQuestions/QuestionThree';
import QuestionFour from './surveyQuestions/QuestionFour';
import QuestionFourMobile from './surveyQuestions/QuestionFourMobile';
import ListSendingScreen from './ListSendingScreen';
import GetEmail from './surveyQuestions/GetEmail';
import QuestionFourTablet from './surveyQuestions/questionFourTablet';

function Survey() {

    const recaptchaValue = useRef(null)
    const captchaToken = useRef(null)

    const mobileSize = useMediaQuery({query: '(max-width: 500px)'})
    const tabletSize = useMediaQuery({query: '(max-width: 899px)'})
    const laptopSize = useMediaQuery({query: '(min-width: 900px)'})
    const monitorSize = useMediaQuery({query: '(min-width: 1500px)'})

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [ageInputValue, setAgeInputValue] = useState(1)

    const [isFirstOccasionRender, setIsFirstOccasionRender] = useState(true)
    const [surveyComplete, setSurveyComplete] = useState(false)
    const [error, setError] = useState('')
    const [invalidCaptcha, setInvalidCaptcha] = useState(false)

    const [age, setAge] = useState(0)
    const [gender, setGender] = useState('')
    const [interests, setInterests] = useState('')
    const [occasion, setOccasion] = useState('')
    const [occasionInputValue, setOccasionInputValue] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')

    const handleOccasionIconClick = (name) => {
        setOccasion(name)
        setIsFirstOccasionRender(false)
        setOccasionInputValue('')
        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1)
        }, 500);
    }

    const handleOccasionInputChange = (e) => {
        setIsFirstOccasionRender(false)
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
        setGender(gender)
        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1)
        }, 500);
    }
    
    const findGifts = async () => {
        
        const answersObject = {
             gender,
             age,
             interests: interests.split(', '),
             occasion: occasionInputValue === '' ? occasion : occasionInputValue,
             firstName, 
             email,
             captchaToken: captchaToken.current
         }

                try {
                    setSurveyComplete(true)
                    await axios.post('https://api.usegiftr.io/submit', answersObject)
                } catch (error) {
                    console.error(error)
                }
            }
            
        const handleNextBtnClick = () => {
            if (currentQuestion === 2 && (ageInputValue === 0 || ageInputValue === '')) {
            setError('Please enter a valid age')
            setTimeout(() => {
                setError('')
            }, 1500);
        }   else if (currentQuestion === 3 && interests.trim() === '') {
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
                currentQuestion !== 6 && setCurrentQuestion(currentQuestion + 1)
            }
        }
        
        const handleBackBtnClick = () => {
            currentQuestion !== 1 && setCurrentQuestion(currentQuestion - 1)
        }
        
        const validateSubmission = async () => {
            if (firstName === '') {
                setError('Please enter both your first name and email address')
                setTimeout(() => {
                    setError('')
                }, 3000);
            }
             else {
        
                if (!validator.isEmail(email)) {
                    setError("Whoops! That isn't a valid email address.")
                setTimeout(() => {
                    setError('')
                    }, 4000);
                }

                else {
                    const token = recaptchaValue.current.getValue()
                    if (token === "") {
                        setInvalidCaptcha(true)
                        setTimeout(() => {
                            setInvalidCaptcha(false)
                        }, 2000);
                    } else {
                        recaptchaValue.current.reset()
                        captchaToken.current = token
                        findGifts()
                    }
                }
        }
        
        }
    const questionOptions = {
        1:  <QuestionOne handleGenderClick={handleGenderClick} gender={gender} />,
        2:  <QuestionTwo setAge={setAge} ageInputValue={ageInputValue} setAgeInputValue={setAgeInputValue} />,
        3:  <QuestionThree interests={interests} setInterests={setInterests} />,
        4: mobileSize ? <QuestionFourMobile isFirstOccasionRender={isFirstOccasionRender} occasion={occasion} occasionInputValue={occasionInputValue} handleOccasionIconClick={handleOccasionIconClick} handleOccasionInputChange={handleOccasionInputChange} /> :
        tabletSize ? <QuestionFourTablet isFirstOccasionRender={isFirstOccasionRender} occasion={occasion} occasionInputValue={occasionInputValue} handleOccasionIconClick={handleOccasionIconClick} handleOccasionInputChange={handleOccasionInputChange} /> :
        <QuestionFour isFirstOccasionRender={isFirstOccasionRender} occasion={occasion} occasionInputValue={occasionInputValue} handleOccasionInputChange={handleOccasionInputChange} handleOccasionIconClick={handleOccasionIconClick}/>,
        5: <GetEmail handleEmailInputChange={handleEmailInputChange} handleFirstNameInputChange={handleFirstNameInputChange} />
    }

    const questions = {
        1: 'What is his or her gender?',
        2: `What is ${gender === 'boy' ? 'his' : 'her'} age?`, 
        3: `What are some interests that ${gender === 'boy' ? 'he' : 'she'} has?`,
        4: "What's the special occasion?",
        5: 'Where should we send your gift list to?'
    }

    return (
      !surveyComplete ? 
        
        <div className={monitorSize ? 'surveyContainer' : laptopSize ? 'surveyContainerLaptop' : 'surveyContainerTablet'}>
             <h1 style={{color: error ? '#38B6FF' : '#373737'}} className={error ? 'questionError' : mobileSize ? 'questionMobile' : 'question'}>{!error ? questions[currentQuestion]: error}</h1>
             <div className='questionContainer'>
                {questionOptions[currentQuestion]}
             </div>
            {currentQuestion === 5 && 
            <>
                <div className='captchaContainer'>
                    <ReCAPTCHA ref={recaptchaValue} sitekey='6LfJLg4oAAAAAOfTMIXCpHZl9dni85wKSTJ3mtEV' />
                    {invalidCaptcha && <p style={{color: 'red', fontFamily: 'Montserrat', textAlign: 'center'}}>Invalid Captcha</p>}
                </div>
                <div onClick={validateSubmission} className='nextBtn'>
                    <h3>Search</h3>
                </div>
            </>
            }
            {currentQuestion !== 5 && currentQuestion !== 1 &&
            <div onClick={handleNextBtnClick} className='nextBtn'>
                <h3>Next</h3>
            </div>}
            {currentQuestion !== 1 && 
            <div onClick={handleBackBtnClick} className='backBtn'>
                <h3>Back</h3>
            </div> }
        </div> 
        
        :

        <ListSendingScreen />

    );
}

export default Survey;