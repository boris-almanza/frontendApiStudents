import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/Appbar';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Student/>

    </div>
  );                
}

export default App;
