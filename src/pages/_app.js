import { useEffect, useState } from 'react'
import 'react-accessible-accordion/dist/fancy-example.css'
import { Provider } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import '../../node_modules/react-modal-video/css/modal-video.min.css'
//////////////////////////////
// admin dashboard css imports
// the full page css import
import '../../public/css/admin/admin.css'
// components css imports
import '../../public/css/admin/analytics.css'
import '../../public/css/admin/doctor.css'
import '../../public/css/admin/doctorList.css'
import '../../public/css/admin/home.css'
import '../../public/css/admin/newDoctor.css'
import '../../public/css/admin/newUser.css'
import '../../public/css/admin/chart.css'
import '../../public/css/admin/chart.css'
import '../../public/css/admin/sidebar.css'
import '../../public/css/admin/topbar.css'
import '../../public/css/admin/user.css'
import '../../public/css/admin/userList.css'
import '../../public/css/admin/featuredInfo.css'
import '../../public/css/admin/widgetSm.css'
import '../../public/css/admin/widgetLg.css'
//////////////////////////////
//client interaface css imports
import '../../public/css/client/animate.css'
import '../../public/css/client/bootstrap.min.css'
import '../../public/css/client/icofont.min.css'
import '../../public/css/client/meanmenu.css'
import '../../public/css/client/responsive.css'
import '../../public/css/client/rtl.css'
import '../../public/css/client/style.css'
//////////////////////////////
// components imports
import Sidebar from "../components/Admin/sidebar/Sidebar"
import Topbar from "../components/Admin/topbar/Topbar"
import Footer from '../components/Client/_App/Footer'
import Layout from '../components/Client/_App/Layout'
import Navbar from '../components/Client/_App/Navbar'
import TopHeader from '../components/Client/_App/TopHeader'
//////////////////////////////
// redux store import
import store from './features/store'


const MyApp = ({ Component, pageProps }) => {

    const [user, setUser] = useState()
    /////////////////////////////
    // get user if logged in
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            console.log(foundUser);
        }
    }, []);
    /////////////////////////////

    const [admin, setDisplay] = useState(false);

    useEffect(() => {

        setDisplay(true);
    }, [])
    return (

        // <>
        //     {admin ?
        //         <>
        //             {/* presistant component between page ( admin ) */}
        //             <Topbar />
        //             <div className="container" id="admin">
        //                 <Sidebar />

        //                 {/* component replaced by each page on render  */}
        //                 <Component {...pageProps} />

        //             </div>
        //         </>

        //         :
                <>
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
                </>
        //     }

        // </>
    )
}

export default MyApp