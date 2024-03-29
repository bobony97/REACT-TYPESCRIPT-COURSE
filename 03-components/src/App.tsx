import React from 'react';
import './App.css';
import { FunctionalComponent } from './componentes/funcionalComponent';
import { ClassComponent } from './componentes/classComponent';


function App() {
  return (
    <>
      <FunctionalComponent firstName={"agus"} />
      <br />
      <ClassComponent firstName={"aguss"} />
    </>
  );
}

export default App;
