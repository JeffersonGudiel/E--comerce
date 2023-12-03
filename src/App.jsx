import NavBar from './componentes/NavBar/NavBar';
import IntemListContainer from './componentes/ItemListContainer/IntemListContainer';
import './style.scss';

const App = () => {
  return (
    <div>
      <NavBar />
      <IntemListContainer greeting = "Productos"/>
    </div>
  )
}

export default App