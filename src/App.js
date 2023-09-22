import React, { useState } from 'react';

import Survey from './components/Survey';
import Welcome from './components/Welcome';


function App() {

  const [startSurvey, setStartSurvey] = useState(false)

  return !startSurvey ? <Welcome setStartSurvey={setStartSurvey} /> : <Survey />

  
}

export default App;