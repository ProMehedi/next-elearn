import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.min.css'
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
