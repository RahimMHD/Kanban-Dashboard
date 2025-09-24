
import './App.css'
import { useEffect, useState } from 'react';
import SideBar from './sections/AllBarComponent/sidebaFile/sidebar'
import NavBar from './sections/AllBarComponent/nav-bar/navBar';
import SearchBar from './sections/AllBarComponent/nav-bar/searchBar';
import { motion } from 'framer-motion';
import Footer from './sections/Footer';
import Crm from './sections/AllBarComponent/dashboard/crm';
import Analytics from './sections/AllBarComponent/dashboard/analytics';
import { EcommerceDashboard } from './sections/AllBarComponent/dashboard/eCommerce';
import AcademyDashboard from './sections/AllBarComponent/dashboard/academy';
import LogisticsDashboard from './sections/AllBarComponent/dashboard/Logistics';
import CategoryPage from './sections/AllBarComponent/apps & pages/eCommerce/products/category';
import AddProductPage from './sections/AllBarComponent/apps & pages/eCommerce/products/add';
import ProductsListPage from './sections/AllBarComponent/apps & pages/eCommerce/products/list';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EcommerceSections from './sections/AllBarComponent/apps & pages/eCommerce/ecommerceSections';
import OrdersListPage from './sections/AllBarComponent/apps & pages/eCommerce/orders/listOrders';
import OrderDetailsPage from './sections/AllBarComponent/apps & pages/eCommerce/orders/detailsOrders';
import CustomersListPage from './sections/AllBarComponent/apps & pages/eCommerce/customers/CustomersListPage';
import CustomerDetailsPage from './sections/AllBarComponent/apps & pages/eCommerce/customers/CustomerDetailsPage';
import ReviewsManagementPage from './sections/AllBarComponent/apps & pages/eCommerce/ReviewsManagementPage';
import Referrals from './sections/AllBarComponent/apps & pages/eCommerce/referralsPage';
import Settings from './sections/AllBarComponent/apps & pages/eCommerce/settingPage';
import AcademyCourses from './sections/AllBarComponent/apps & pages/Academy/academyCourses';
import CourseDetails from './sections/AllBarComponent/apps & pages/Academy/courseDetails';
import FleetLogistics from './sections/AllBarComponent/apps & pages/logistics/fleetLogistic';
import InvoiceList from './sections/AllBarComponent/apps & pages/invoice/invoiceList';
import InvoiceAdd from './sections/AllBarComponent/apps & pages/invoice/invoiceAdd';
import InvoiceEdit from './sections/AllBarComponent/apps & pages/invoice/invoiceEdit';
import InvoicePreview from './sections/AllBarComponent/apps & pages/invoice/invoicePreview';



const App: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  useEffect(() => {
    window.innerWidth >= 1212 ? setIsResizing(false) : setIsResizing(true); 
  }, [])

  const handleExpandedFromChild = (data: boolean) => setIsExpanded(data)

  // Check if she is resizing to change sidebar position
    window.addEventListener("resize", () => {
        // console.log(window.innerWidth)
        window.innerWidth >= 1212 
          ? setIsResizing(false)
          : setIsResizing(true);
    })


  return (
    <BrowserRouter>
      <div className={`app w-[100%] ${isResizing ? "px-4" : "flex gap-5"} `}>
        <SideBar 
          isExpand={handleExpandedFromChild}
          isResize={isResizing}
        />

        <motion.div
                  animate={{
                    width: isResizing ? "100%" : isExpanded ? "81.6%" : "92%", 
                    justifyContent: isResizing ? "center" : ""
                  }}
                  transition={{duration: 0.2, ease: "easeInOut"}}
                  className={`flex flex-col relative`}
        >
          <NavBar isExpand={isExpanded} isResize={isResizing} />
          <SearchBar />
          <Routes>
            {/* dashboard sections  */}
            <Route index element={<Crm />} />
            <Route path='dashboards/logistics' element={<LogisticsDashboard />} />
            <Route path='dashboards/academy' element={<AcademyDashboard />} />
            <Route path='dashboards/ecommerce' element={<EcommerceDashboard />} />
            <Route path='dashboards/analytics' element={<Analytics />} />

            {/* <Route path='/category' element={<CategoryPage />} />
            <Route path='/add-product' element={<AddProductPage />} />
            <Route path='/products-list' element={<ProductsListPage />} /> */}

            <Route path="ecommerce/dashboard" element={<EcommerceDashboard />} />
            <Route path="ecommerce/managereviews" element={<ReviewsManagementPage />} />
            <Route path="ecommerce/referrals" element={<Referrals />} />
            <Route path="ecommerce/settings" element={<Settings />} />
            <Route path="ecommerce/products/add" element={<AddProductPage />}/>
            <Route path="ecommerce/products/list" element={<ProductsListPage />} />
            <Route path="ecommerce/products/category" element={<CategoryPage />} /> 
            <Route path="ecommerce/orders/list" element={<OrdersListPage />} />
            <Route path="ecommerce/orders/details" element={<OrderDetailsPage />} />            
            <Route path="ecommerce/customers/list" element={<CustomersListPage />} />
            <Route path="ecommerce/customers/details" element={<CustomerDetailsPage />} />

            {/* academy sections  */}
            <Route path='academy/dashboard' element={<AcademyDashboard />} />
            <Route path='academy/mycourses' element={<AcademyCourses />} />
            <Route path='academy/coursedetails' element={<CourseDetails />} />

            {/* logistics sections  */}
            <Route path='logistics/dashboard' element={<LogisticsDashboard />} />
            <Route path='logistics/fleet' element={<FleetLogistics />} />
            
            {/* logistics sections  */}
            <Route path='invoice/list' element={<InvoiceList />} />
            <Route path='invoice/add' element={<InvoiceAdd />} />
            <Route path='invoice/edit' element={<InvoiceEdit />} />
            <Route path='invoice/preview' element={<InvoicePreview />} />

          </Routes>
          <Footer />
        </motion.div>
      
      </div>
    </BrowserRouter>
  )
}

export default App
