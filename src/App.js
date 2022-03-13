// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import ItemsList from './components/ItemsList';




function App() {
  return (
    <div className="App">
       <NavBar/>
       
      {/* <header >
        
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header> */}

      <main>
        <ItemsList/>
      </main>
    </div>
  );
}

export default App;
