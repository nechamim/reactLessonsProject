import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { About } from './components/About';
import { Products } from './components/Products';
import { Settings } from './components/Settings';
import { Product } from './components/Product';
import {  UserContextProvider } from './context/User.context';
import { ProductContextProvider } from './context/Product.context';


const routes = [{
    route: 'about',
    Component: About,
    name: 'About',
}, {
    route: 'settings',
    Component: Settings,
    name: 'Settings',
}, {
    route: 'products',
    Component: Products,
    name: 'Products',
}];

function App() {
    return ( 
   <UserContextProvider>
    <div className = "App" >
        <menu >
        <ul > {
            /* יצירת קישור ע"י הקומפוננטה
                        Link
                        to - המאפיין שקובע את הקישור
                    */
        } {
            /* <li> <Link to="about">About</Link> </li>
                        <li> <Link to="settings">Setttings</Link> </li>
                        <li> <Link to="products">Products</Link> </li> */
        } { routes.map(route => < li key = { route.route } > < Link to = { route.route } > { route.name } </Link> </li > ) } 
        </ul>
        </menu >
        <div >
            { /* Routes - חלק שמגדיר את הגדרות התצוגה, לכל ניתוב להראות קומפוננטה ספציפית */ }
            <Routes > 
                { /* Route - קומפוננטה שמגדירה הגדרת ניתוב ספציפית, מקבלת נתיב מסוים ואת הקומפוננטה שאמורה להיות מוצגת בו */ } 
                <Route path="about" element={<About />} />
                <Route path="settings" element={<Settings />} />
                <Route path="products" element={
                <ProductContextProvider>
                    <Products />
                </ProductContextProvider>} >
                    <Route path=":productIndex" element={ <Product /> } />
                    <Route path="settings" element={ 
                    <UserContextProvider>                      
                         <Settings />
                    </UserContextProvider>} />
                </Route>
                
                {/* {
                routes.map(route => <Route 
                    key={ route.route }
                    path={ route.route }
                    element={ < route.Component /> }
                />)  */}
                
            </Routes >
        </div>
    </div >
    </UserContextProvider>
);
}

export default App;


// npm i react-router-dom