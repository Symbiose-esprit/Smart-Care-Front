import '../public/css/bootstrap.min.css'
import '../public/css/animate.css'
import '../public/css/icofont.min.css'
import '../public/css/meanmenu.css'
import 'react-tabs/style/react-tabs.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../public/css/style.css'
import '../public/css/responsive.css'
import '../public/css/rtl.css'
import Layout from '../components/_App/Layout';
import { Provider } from 'react-redux'
import store from './store'



const MyApp =  ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </Provider>
    )
}

export default MyApp