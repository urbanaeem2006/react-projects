
let name = "Urba"
import Navbar from './components/Navbar.jsx'  
import TextForm  from './components/TextForm.jsx'  
function App() {
  return (
 <>
  { <Navbar title = "TextUtils" aboutText = "About" homepage = "Home"/>}
  <div className="container my-3">
    <TextForm heading = "Enter The text to analyze below"/>
  </div>
  

 </>

  );
}
export default App; 
    