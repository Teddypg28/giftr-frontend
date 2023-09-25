import React, { useState } from 'react';
import SplashPage from './components/SplashPage';

import Survey from './components/Survey';
import Welcome from './components/Welcome';


function App() {

  // const [startSurvey, setStartSurvey] = useState(false)

  // return !startSurvey ? <Welcome setStartSurvey={setStartSurvey} /> : <Survey />

  return <SplashPage />
  
}

export default App;