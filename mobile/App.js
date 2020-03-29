import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes/>
  );
}


//React Native nao é semantico
//Estilização é feita pela classe StyleSheet
//React -> no case (background-color)
//React Native -> no case (backgroundColor)
//React Native não existe herança de estilos
