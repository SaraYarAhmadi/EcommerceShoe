import Header from './component/Header/Header'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.css'
import Footer from './component/Footer/Footer'

function App() {
const router = useRoutes(routes)

  return (
  <div className="home w-full dark:bg-zinc-800">
   <Header/>
   {router}
   <Footer/>
  {/* <div className="overlay overlay--visible"></div> */}
  </div>
  )
}

export default App
