import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './Components/bloglist';
import Header from "./Components/header"
import BlogView from './Components/blogview';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogView />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
