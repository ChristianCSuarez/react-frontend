import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateOrUpdateEmployee from './Components/CreateOrUpdateEmployee';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployee from './Components/ListEmployee';
import ViewEmployee from './Components/ViewEmployee';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';

function App() {
    return (
      <>
      <Router>
        <div className="container">
          <HeaderComponent/>
          <Routes>
              <Route exact path="/" element={<ListEmployee/>} />
              <Route exact path="/add-employee/:id" element={<CreateOrUpdateEmployee/>} />
              <Route exact path="/view-employee/:id" element={<ViewEmployee/>} />
              <Route exact path="/*" element={<NotFound/>} />
            </Routes>
            <Footer />
        </div>
      </Router>
      </>
  )
}

export default App
