import React, { useState } from 'react';
import ListSendingScreen from './components/ListSendingScreen';

import Survey from './components/Survey';
import Welcome from './components/Welcome';


function App() {

  // const [startSurvey, setStartSurvey] = useState(false)

  // return !startSurvey ? <Welcome setStartSurvey={setStartSurvey} /> : <Survey />


  return <ListSendingScreen />

  
}

export default App;