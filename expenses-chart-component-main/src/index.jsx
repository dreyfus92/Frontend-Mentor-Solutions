import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

const theme = extendTheme({
    semanticTokens: {
        colors: {
            'chakra-body-bg': {
                _light: '#f8e9dd',
            },
        },
    },
})

root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
)
