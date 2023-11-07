import React from 'react';
import styled from 'styled-components';

//Dichiarazione Styled Components:
const H1 = styled.h1`
  color: red;
  text-align: center;
  font-size: 70px;
`

const App = () => {

  //Chiamate e Dichiarazioni Funzioni:
  console.log('Hello World')

  //Struttura del componente (HTML):
  return(
    <div>
      <H1>Hello World</H1>
    </div>
  )
}

export default App;
