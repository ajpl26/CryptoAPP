import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ChakraProvider, theme} from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    
  </React.StrictMode>
);

export const server =  `https://api.coingecko.com/api/v3`;

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=1200