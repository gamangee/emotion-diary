import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalStyle from './style/globalStyle.jsx';
import { CalendarProvider } from './context/CalendarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <CalendarProvider>
      <App />
    </CalendarProvider>
  </>

  // </React.StrictMode>
);
