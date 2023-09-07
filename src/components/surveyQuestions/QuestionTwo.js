import React from 'react';

import { Slider, createTheme, ThemeProvider } from '@mui/material';

function QuestionTwo({ageInputValue, laptopSize, setAgeInputValue, setAge}) {

    const blueTheme = createTheme({
        palette: {
            primary: {
                main: '#38B6FF'
            }
        }
    })

    const handleSliderChange = (e) => {
        isNaN(e.target.value) || e.target.value === ' ' || e.target.value === '' ? setAgeInputValue('')
        :
        setAgeInputValue(parseInt(e.target.value))
        setAge(parseInt(e.target.value))
    }

    return (
        <>
            <input value={ageInputValue} onChange={e => handleSliderChange(e)} className='ageInput' />
            <div className={laptopSize ? 'sliderContainerReduced' : 'sliderContainer'}>
                <ThemeProvider theme={blueTheme}>
                    <Slider value={ageInputValue} step={1} max={100} min={1} onChange={handleSliderChange} />
                </ThemeProvider>
            </div>
        </>
    );
}

export default QuestionTwo;