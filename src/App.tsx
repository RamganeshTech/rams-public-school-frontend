import { Suspense } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Careers from "./pages/Careers"
import InquiryFormPage from "./pages/InquiryFormPage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import NotFound from "./pages/NotFound"
import ContactUs from "./pages/ContactUs"
import AccountDeletion from "./pages/AccountDeletion"

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

        <Header />
       
        <Routes >

          <Route index path="/" element={<Home />} />
          <Route  path="/careers" element={<Careers />} />
          <Route  path="/inquiry-form" element={<InquiryFormPage />} />
          <Route  path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route  path="/contact-us" element={<ContactUs />} />
          <Route  path="/account-deletion" element={<AccountDeletion />} />
          <Route  path="*" element={<NotFound />} />
        </Routes>

        {/* <ToastContainer /> */}


            <Footer />

        {/* </ToastProvider> */}
        {/* </ErrorBoundary> */}
      </Suspense >
      </Router >
  )
}

export default App