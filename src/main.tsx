import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/Store.tsx'
import ScrollToTop from './Components/ScrollToTop.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
         <BrowserRouter>
         <ScrollToTop/>
            <App />
        </BrowserRouter>
    </Provider>
       
   

)
