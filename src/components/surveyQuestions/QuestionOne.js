import React from 'react';

import '../../Survey.css'

import { Slider, createTheme, ThemeProvider } from '@mui/material';


function QuestionOne({ageInputValue, windowSizeQuery, setAgeInputValue}) {

    const blueTheme = createTheme({
        palette: {
            primary: {
                main: '#38B6FF'
            }
        }
    })

    const handleSliderChange = (e) => {
        isNaN(e.target.value) || e.target.value === '' ? 
        setAgeInputValue(0) :
        setAgeInputValue(parseInt(e.target.value))
    }

    return (
        <>
            <input value={ageInputValue} onChange={e => handleSliderChange(e)} className='ageInput' />
            <div className={windowSizeQuery ? 'sliderContainerMobile' : 'sliderContainer'}>
                <ThemeProvider theme={blueTheme}>
                    <Slider value={ageInputValue} step={1} max={100} min={1} onChange={handleSliderChange} />
                </ThemeProvider>
            </div>
        </>
    );
}

export default QuestionOne;