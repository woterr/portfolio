import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './Components/bloglist';
import Header from "./Components/header"
import BlogView from './Components/blogview';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Info from './Info';

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/sent" element={<Info info="Message sent!" description="Your message has been sent. You might recieve a reply within 2-3 business days :)" />}/>
          <Route path="*" element={<Info info="404" description="Uh Oh! This page does not exist! :(" />}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
