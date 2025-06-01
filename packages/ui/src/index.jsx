import React from 'react'
import App from '@/App'
import { store } from '@/store'
import { createRoot } from 'react-dom/client'

// style + assets
import '@/assets/scss/style.scss'

// third party
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import ConfirmContextProvider from '@/store/context/ConfirmContextProvider'
import { ReactFlowContext } from '@/store/context/ReactFlowContext'
import { ConfigProvider } from '@/store/context/ConfigContext'
import { ErrorProvider } from '@/store/context/ErrorContext'
import '@assets/scss/style.scss'; // or your custom file like:
import './dark-theme.scss';


const container = document.getElementById('root')
const root = createRoot(container)

body {
  background-color: #121212 !important;
  color: #ffffff !important;
}

.flowise-app, .main-container, .sidebar {
  background-color: #1e1e1e !important;
  color: #f5f5f5 !important;
}


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <SnackbarProvider>
                    <ConfigProvider>
                        <ErrorProvider>
                            <ConfirmContextProvider>
                                <ReactFlowContext>
                                    <App />
                                </ReactFlowContext>
                            </ConfirmContextProvider>
                        </ErrorProvider>
                    </ConfigProvider>
                </SnackbarProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
