import Tabs from './Components/Tabs';
import Swal from 'sweetalert2'
import './css/App.css';


function App() {

  Swal.fire({
    title: '¡Atención!',
    text: 'Este aplicativo web no guarda la información que usted digita en ninguna base de datos',
    icon: 'info',
    confirmButtonText: 'Ok',
    showCloseButton: true
  })

  return (
    <div className="App">
      <Tabs></Tabs>
    </div>
  );
}

export default App;
