import React from 'react';
import CustomFormSubmission from './components/CustomFormSubmission';
import DynamicInputForm from './components/DynamicInputForm';
import RealTimeValidationForm from './components/RealTimeValidationForm';

function App() {
  return (
    <div>
      <h1>UseRef Examples</h1>
      <DynamicInputForm />
      <RealTimeValidationForm />
      <CustomFormSubmission />
    </div>
  );
}

export default App;
