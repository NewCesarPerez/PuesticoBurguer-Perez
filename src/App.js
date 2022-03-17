// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemsList from './components/ItemsList';
import ItemCount from './components/ItemCount';

const MaxStock=10;


function App() 
{
  return (
    <div className="App">
      <NavBar/>
      <main className='w-100 my-5 '>
        <ItemsList/>
        <div className='border w-50 m-auto'>
          <h1>Ordena tu pedido</h1>
          <h5 className='my-5'>Hamburguesa Maracucha</h5>
          <div className='my-5'>
        <ItemCount  MaxStock={MaxStock}/>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
