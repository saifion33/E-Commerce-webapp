
import { Outlet } from "react-router-dom"
import AlertBar from "./components/Alert/Alertbar"

function App() {


  return (
    <div className="min-h-screen bg-slate-900 relative">

      <AlertBar />
      <Outlet />
    </div>
  )
}

export default App
