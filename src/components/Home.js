import {React, useState } from 'react';
import styled from 'styled-components';
import {BsJustify} from 'react-icons/bs';
import {NavLink, useNavigate} from 'react-router-dom';
import AboutUs from './Body/AboutUs';
import WhatweDo from './Body/WhatweDo';
import Myteam from './Body/Myteam';
import Video from './Body/Video';
import Language from './Body/Language';
import Nativefood from './Footer/Nativefood';
import Pictures from './Body/Pictures';
import Footer from './Footer/Footer';

import HeroImage from './Body/HeroImage';
import Label from './Pages/Label';


  const Home= () => {
return(
<>
<Label/>
<HeroImage/>
    <AboutUs/>
    <WhatweDo/>
     <Myteam/>
     <Video/> 
     <Language/>
     <Nativefood/>
     <Pictures/>
    <Footer/>
</>
  )
}

export default Home 

