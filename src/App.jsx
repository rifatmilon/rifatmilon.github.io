import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Certifications from './pages/Certifications';
import Awards from './pages/Awards';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="projects" element={<Projects />} />
        <Route path="publications" element={<Publications />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="awards" element={<Awards />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
