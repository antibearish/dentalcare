import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import BiodataPage from './components/BiodataPage';
import EducationPage from './components/EducationPage';
import ScreeningPage from './components/ScreeningPage';
import ResultsPage from './components/ResultsPage';
import './index.css';

export function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/biodata" element={<BiodataPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/screening" element={<ScreeningPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
