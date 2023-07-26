import { ContextProvider } from "./context/Context.jsx";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
