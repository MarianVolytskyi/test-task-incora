
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';

function App() {
  console.log('app')
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<LoginForm />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;