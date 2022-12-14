
import react, {useState, useEffect} from 'react';
import  './CSS/App.scss';
import  './CSS/custom.css';
import './CSS/Header.scss';
import './CSS/ExternalPages.scss';
import './CSS/Body.scss';
import './CSS/Mediaquery.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import styled from 'styled-components';
import Home from './components/Home';
import Gallary from './components/Pages/Gallary';

import Minutes from './components/Pages/Minutes';
import Videos from './components/Pages/Videos';
import May2022meeting from './components/Pages/InnerPage/May2022meeting';
import April2022Meeting from './components/Pages/InnerPage/April2022Meeting';
import {BrowserRouter as Router,Routes, Route, NavLink, useNavigate} from "react-router-dom";
import SignIn from './components/Header/DropdownContainer/SignIn';
import { AuthProvider } from './Auth';
import RequireAuth from './components/ReguireAuth'
import { Constitution } from './components/Pages/InnerPage/Constitution';
import Feb2022Meeting from './components/Pages/InnerPage/Feb2022Meeting';
import Match2022Meeting from './components/Pages/InnerPage/Match2022Meeting';
import June2022Meeting from './components/Pages/InnerPage/June2022Meeting'; 
import Sept2022Meeting from './components/Pages/InnerPage/Sept2022Meeting';
import Oct2019Meeting from './components/Pages/InnerPage/Oct2019Meeting';
import Oct2022Meeting from './components/Pages/InnerPage/Oct2022Meeting';
import Update from './components/Pages/InnerPage/Update';

 const App =() =>{
const[islogged, setIslogged] = useState(false)
const logging = ()=>{setIslogged(!islogged)}


function refreshPage() {window.reload(false);}

 return (
     <>
<Router>
<AuthProvider>
<APP className='p-0 m-0 position-relative bg-slate-900 text-light h-100'>
<AppHeader>
<Routes>
 <Route exact path='*' element={<Home/>}/>
 <Route path='/Gallary' element={<Gallary/>}/>
 <Route path='/Videos' element={<Videos/>}/> 
 <Route path='/Update' element={
   <RequireAuth>
       <Update/>

   </RequireAuth>
 }/> 
<Route path='/Minutes' element={
/*   <RequireAuth> 
 */      <Minutes/>
/*  </RequireAuth> 
 */}/>

 <Route path='/May2022meeting' element={
    <RequireAuth> 
 <May2022meeting/>
</RequireAuth> 

 }/>
 <Route path='/April2022Meeting' element={
 <RequireAuth> 
    <April2022Meeting/>

</RequireAuth> 
 }/>
 <Route path='/Match2022Meeting' element={
 <RequireAuth> 
    <Match2022Meeting/>

</RequireAuth> 
 }/>
 <Route path='/Feb2022Meeting' element={
 <RequireAuth>
    <Feb2022Meeting/>

</RequireAuth> 
 }/>
 <Route path='/June2022Meeting' element={
 <RequireAuth> 
    <June2022Meeting/>

</RequireAuth> 
 
 }/>
 <Route path='/Sept2022Meeting' element={
 <RequireAuth> 
    <Sept2022Meeting/>

</RequireAuth> 
 }/>
 <Route path='/Oct2019Meeting' element={
 <RequireAuth> 
    <Oct2019Meeting/>

</RequireAuth> 
 }/>
 <Route path='/Oct2022Meeting' element={
 <RequireAuth> 
    <Oct2022Meeting/>

</RequireAuth> 
 }/>
 <Route path='/Constitution' element={

/*  <RequireAuth>  */
       <Constitution/>

/* </RequireAuth>  */
 }/>
 <Route path='/SignIn' element={<SignIn/>}/>
 </Routes> 
    </AppHeader>
   </APP> 
</AuthProvider>
</Router>
   </>
  );
}

export default App;

const APP = styled.div`
width:100vw;
height:100vh;
box-sizing:border-box;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const AppHeader = styled.div`
position:absolute;
width:100%;
height:100%;
box-sizing:border-box;
left:0;
right:0;
bottom:0;
top:0;


`

 /*  "homepage": "http://IgboCulturalAssociationNorthwestIreland.github.io/icanwi", */
