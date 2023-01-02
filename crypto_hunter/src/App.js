import './App.css';
import Header from './components/header';
import MainRouter from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainRouter />
    </div>
  );
}


export default App;
