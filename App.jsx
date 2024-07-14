import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mode from './Mode';
import GoogleForm from './components/GoogleForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mode />} />
        <Route path="/GoogleForm" element={<GoogleForm />} />
      </Routes>
    </Router>
  );
}

export default App;
