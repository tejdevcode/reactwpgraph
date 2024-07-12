import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/bootstrap.scss'
import Home from './Home'
import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apollo";

function App() {
  

  return (
    <>
    <ApolloProvider client={client}>
      <Home />
      </ApolloProvider>
    </>
  )
}

export default App
