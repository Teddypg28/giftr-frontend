import React from 'react';

import { Slider, createTheme, ThemeProvider } from '@mui/material';

import { useMediaQuery } from 'react-responsive';

function QuestionTwo({ageInputValue, setAgeInputValue, setAge}) {

    const mobileSize = useMediaQuery({query: '(max-width: 500px)'})
    const tabletSize = useMediaQuery({query: '(max-width: 899px)'})

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
            <div className={mobileSize ? 'sliderContainerReduced' : tabletSize ? 'sliderContainerTablet' : 'sliderContainer'}>
                <ThemeProvider theme={blueTheme}>
                    <Slider value={ageInputValue} step={1} max={100} min={1} onChange={handleSliderChange} />
                </ThemeProvider>
            </div>
        </>
    );
}

export default QuestionTwo;