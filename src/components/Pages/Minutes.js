import React, {useRef} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Footer from '../Footer/Footer';
import Modals from '../Header/DropdownContainer/Modals';
import styled from 'styled-components';
import {FaRegCalendarCheck} from 'react-icons/fa'
import PrivatePageLink from '../Header/DropdownContainer/PrivatePageLink';
import Pdf from './InnerPage/Pdf'





  const Minutes = () => {
  let refs = useRef();
  let navigation = useNavigate();
 


  function febMeeting(){
    navigation('/Feb2022meeting')
  }
  function matchMeeting(){
    navigation('/Match2022meeting')
  }

  function aprilMeeting(){
    navigation('/April2022meeting')
  }
  function mayMeeting(){
    navigation('/May2022meeting')
  }
  function juneMeeting(){
    navigation('/June2022meeting')
  }
  function septMeeting(){
    navigation('/Sept2022meeting')
  }
  function octMeeting(){
    navigation('/Oct2019Meeting')
  }
  function octMeeting2022(){
    navigation('/Oct2022Meeting')
  }

  function constitution(){
    navigation('/Constitution')
  }
  function party(){
    navigation('/Update')
  }
  
  
  return (
    <div className='relative h-100vh'>
    { <PrivatePageLink mode={Modals} className='fixed top-0' />}
      <Container className='fluid text-dark ' style={{ minHeight: '100vh', height: 'auto' }}>
        <Container>
          <ROW className='mains-row'>
            <Col className = ' col-md-12 col-lg-7'>
          <TextPage className='jumbotron p-5 relative top-20 bottom-20 pb-10 text-justify'>

      
          {<Pdf/>}
     
           </TextPage>

          </Col>
          <Col className = ' col-md-12 col-lg-5 Columns relative top-32 '>
            <h3 className='d-flex w-100'><span><FaRegCalendarCheck className='mt-1 mx-1'/></span>Minutes By | Date</h3>
                               
            <p className ='relative top-12 left-2 grid grid-cols-1 gap-3 button-page '  >

            <Link to ='/Update' className='bg-warning shadow-md text-center p-1 text-decoration-none' style={{fontSize:'1.2rem'}}><b>Xmass / Appreciation Party Update</b></Link>

            <BUTTON onClick={octMeeting2022}> Minutes for October | 9/10/2022</BUTTON>

            <BUTTON onClick={septMeeting}>  Minutes for September| 18/09/2022</BUTTON>

  
          <BUTTON onClick={juneMeeting}>Minutes for June | 12/06/2022</BUTTON>

          <BUTTON onClick={mayMeeting}> Minutes for May | 8/05/2022</BUTTON>

          <BUTTON onClick={aprilMeeting}>Minutes for April | 10/04/2022</BUTTON>

          <BUTTON onClick={matchMeeting}> Minutes for March | 13/03/2022</BUTTON>

          <BUTTON onClick={febMeeting}> Minutes for Feb | 13/02/2022</BUTTON>

          <BUTTON onClick={octMeeting}> Minutes for October | 13/10/2019</BUTTON>
          </p>
          </Col>
          </ROW>
        </Container>
      </Container>
   {<Footer/>}
 </div>
    
  )
}
export default Minutes

const ROW = styled(Row)`
position:relative;
min-height:80vh;
height:auto;
@media(max-width:992px){
margin-bottom:3rem !important;
@media(max-width:786px){
display:grid;
grid-template-columns: repeat(1, auto);
justify-items:center;
align-items:center;
}
}
`

const TextPage = styled.div`
min-height:100vh !important;
height:auto;
padding-right:3rem !important;
margin-bottom:5rem !important;
@media(max-width:992px){
padding-right:2rem !important;
}
`
const BUTTON = styled(Button)`
background-color: #1c1cf0  !important;
border: 0px solid;
.constitute{
  background-color: #c30101  !important;
}
@media(max-width:996px){
  background-color: #E40078 !important;
  font-weight:700 !important;
  width:auto !important;
  padding:auto !important;
}
@media(max-width:786px){
span{
  display:none !important;
}
  
}
`
