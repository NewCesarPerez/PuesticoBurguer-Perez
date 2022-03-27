// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/NavBar';
import ItemsList from './components/ItemsList';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDescriptionContainer from './components/ItemDescriptionContainer';
import Carrusel from './components/Carrusel';


const stock=10;
const initial=0;
const products=["Hamburguesa","Arepa", "Patacon"]
const mensaje="Cargando red bancaria"

let onAddDos=  (count, stock, OrderSum)=>{
if (count >0 && stock >0){
    console.log("Item Agregado")
    alert("Item Agregado")
    OrderSum=OrderSum+count
    
  }

  else if(count<=0) {
    console.log("Contador en 0.")
    alert("Contador en 0")
  }

  else if(stock<=0) {
    console.log("No hay stock.")
    alert("No hay stock")
  }
}

function App() 
{
  

  return (
    <div className="App">
      <div className='w-100'>
        <NavBar/>
      </div>
      <main className='w-100 '>

       
        <Carrusel />
        
        <div id='ItemList'>
        
        
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-9'>
              <ItemListContainer/>
            </div>
            <div className='col-3 bg-danger my-4'>
            <ItemDescriptionContainer/>
            </div>
          </div>
          
        </div>

          <div className='border w-50 m-auto'>
            <h1>Ordena tu pedido</h1>
            <h5 className='my-5'>Hamburguesa Maracucha</h5>
              <div className='my-5'>
                <ItemCount  stock={stock} initial={initial} onAddDos={onAddDos}/>
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;
