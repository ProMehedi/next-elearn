import { ToastContainer } from 'react-toastify'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import Topbar from '../components/Topbar'
import { Provider } from 'react-redux'
import store from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Topbar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
