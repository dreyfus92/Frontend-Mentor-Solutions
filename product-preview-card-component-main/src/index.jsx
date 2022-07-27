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
                _light: '#F0E9E3',
            },
        },
    },
})

root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
)
