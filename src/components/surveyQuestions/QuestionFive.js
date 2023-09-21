import React from 'react';

import { Slider, createTheme, ThemeProvider } from '@mui/material';

import { useMediaQuery } from 'react-responsive';

function QuestionFive({budgetInputValue, setBudgetInputValue, setBudget}) {

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
        isNaN(e.target.value) || e.target.value === ' ' || e.target.value === '' ? setBudgetInputValue('')
        :
        setBudgetInputValue(parseInt(e.target.value))
        setBudget(parseInt(e.target.value))
    }

    return (
        <>
            <input value={budgetInputValue} onChange={e => handleSliderChange(e)} className='budgetInput' />
            <div className={mobileSize ? 'sliderContainerReduced' : tabletSize ? 'sliderContainerTablet' : 'sliderContainer'}>
                <ThemeProvider theme={blueTheme}>
                    <Slider value={budgetInputValue} step={1} max={300} min={10} onChange={handleSliderChange} />
                </ThemeProvider>
            </div>
        </>
    );
}

export default QuestionFive;