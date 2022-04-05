import 'react-accessible-accordion/dist/fancy-example.css'
import { Provider } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import '../../node_modules/react-modal-video/css/modal-video.min.css'
import '../../public/css/animate.css'
import '../../public/css/bootstrap.min.css'
import '../../public/css/icofont.min.css'
import '../../public/css/meanmenu.css'
import '../../public/css/responsive.css'
import '../../public/css/rtl.css'
import '../../public/css/style.css'
import Footer from '../components/_App/Footer'
import Layout from '../components/_App/Layout'
import Navbar from '../components/_App/Navbar'
import TopHeader from '../components/_App/TopHeader'
import store from './features/store'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Layout>
                {/* presistant components between pages */}
                <TopHeader />
                <Navbar />

                {/* component replaced by each page on render  */}
                <Component {...pageProps} />

                {/* presistant components between pages */}
                <Footer />
            </Layout>
        </Provider>
    )
}

export default MyApp