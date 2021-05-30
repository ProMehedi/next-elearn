import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.min.css'
import '../styles/globals.css'
import Topbar from '../components/Topbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
