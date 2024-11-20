
import Form from "./Component/Form";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Message from "./Component/Message";

function App() {
  
  return (
    
<Router>
  <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path="/message" element={<Message />} />
  </Routes>
</Router>





  );
}
export default App;
  






