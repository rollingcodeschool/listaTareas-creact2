import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import FormularioTarea from './components/FormularioTarea'
import ListaTareas from './components/ListaTareas'

function App() {
  return (
    <body>
      <main>
        <h1 className='text-center m-4'>Lista de Tareas</h1>
        <FormularioTarea></FormularioTarea>
        <ListaTareas></ListaTareas>
      </main>
      <Footer></Footer>
    </body>
  )
}

export default App
