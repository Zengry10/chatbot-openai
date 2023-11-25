import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import ChatBot from './Screens/Chatbot';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/chatbot" />} />

          {/* Route pour /chatbot */}
          <Route path='/chatbot' element={<ChatBot />}>test</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;