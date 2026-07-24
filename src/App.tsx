import { Suspense } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
  return (
    <Router>

      <Suspense fallback={
        <section className='w-full h-full flex items-center justify-center'>
          <div className="flex justify-center items-center py-8">
            <i className="fas fa-circle-notch fa-spin text-primary text-4xl"></i>
          </div>
        </section>
      }>
       
        <Routes >

          <Route index path="/" element={<Home />} />
        </Routes>

        {/* <ToastContainer /> */}

        {/* </ToastProvider> */}
        {/* </ErrorBoundary> */}
      </Suspense >
      </Router >
  )
}

export default App