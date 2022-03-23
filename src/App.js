// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemsList from './components/ItemsList';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

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
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(mensaje);
    }, 0);
});
const promiseDos = new Promise((resolve, reject) => {
  setTimeout(() => {
  resolve();
  }, 2000);
});

promise.then((response) => {
  document.getElementById("ItemList").innerHTML =response;
})
promiseDos.then(() => {
  document.getElementById("ItemList").innerHTML ="";
});

  return (
    <div className="App">
      <NavBar/>
      <main className='w-100 my-5 '>
        <ItemsList products={{...products}}/>
        <div id='ItemList'>
        
        
        </div>
        <ItemListContainer/>
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
