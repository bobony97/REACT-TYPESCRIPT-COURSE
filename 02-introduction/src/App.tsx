import React from 'react';
import './App.css';

const name = "Agustin";
const element = <h1>Hello {name}</h1>

const formatName = (user: any) => {
  return user.firstName + ` ` + user.lastName;
} 

const user = {
  firstName: "Agustin",
  lastName: "Perez"
}

const url = `https://www.youtube.com/watch?v=9c7xsjr6Diw&list=PL5sOO-cTNRUVBoyh-7UIzSYTswoIGtdIo&index=13`;
const elementHref = <a href={url} target='_blank' rel='noreferrer'>Introduccion a TSX </a>

function App() {
  return (
    <div className="jsx-ejercicio">
      {name}
      {element}
      <h1>Hello, {formatName(user)}</h1>
      {elementHref}
    </div>
  );
}

export default App;
