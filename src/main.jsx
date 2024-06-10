import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PlanContent from './Contexts/PlanContent.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <PlanContent>
    <BrowserRouter>
      <App />
    <ToastContainer/>
    </BrowserRouter>
  </PlanContent>
  </Provider>

)
