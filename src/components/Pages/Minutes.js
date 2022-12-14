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
      <Container className='fluid text-dark relative' style={{ minHeight: '100vh', height: 'auto' }}>
        <Container>
          <ROW className='mains relative top-20 pb-10'>
            <Col className = ' col-md-12 col-lg-7  colum'>
          <TextPage className='relative'>
          {<Pdf/>}
     
          </TextPage>
          </Col>
          <Col className = ' col-md-12 col-lg-5  relative const-buttons'>
            <h3 className='d-flex w-100'><span><FaRegCalendarCheck className='mt-1 mx-1'/></span>Minutes By | Date</h3>
                               
            <div className ='relative top-12 left-2 grid grid-cols-1 gap-3 '>

            <BUTTON onClick={party} className='bg-warning shadow-md text-center p-1 text-decoration-none' style={{fontSize:'1.2rem'}}>
              <b>Xmass Party Update</b></BUTTON>

          <BUTTON onClick={octMeeting2022}> Minutes for October | 9/10/2022 </BUTTON>

          <BUTTON onClick={septMeeting}>  Minutes for Sept | 18/09/2022 </BUTTON>

          <BUTTON onClick={juneMeeting}>Minutes for June | 12/06/2022</BUTTON>

          <BUTTON onClick={mayMeeting}> Minutes for May | 8/05/2022</BUTTON>

          <BUTTON onClick={aprilMeeting}>Minutes for April | 10/04/2022</BUTTON>

          <BUTTON onClick={matchMeeting}> Minutes for March | 13/03/2022</BUTTON>

          <BUTTON onClick={febMeeting}> Minutes for Feb | 13/02/2022</BUTTON>

          <BUTTON onClick={octMeeting}> Minutes for October | 13/10/2019</BUTTON>
          </div>
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
height:auto !important;
margin-bottom:3rem !important;
.colum{
min-height:100%;
min-width:auto;
padding: 3rem 1rem 1rem 2rem!important;
display:grid;
grid-template-columns: repeat(1, auto);
justify-items:center;
align-items:center;
@media only screen and (min-width: 300px) and (max-width: 786px)  {
  padding-bottom:1rem !important;
  overflow:hidden !important;
}


}
.const-buttons{
  margin:2rem 0  4rem 0 !important;
}
@media(max-width:992px){
  bottom:0;
  top:0 !important;
  padding-bottom: 0 !important;
  margin-bottom:0 !important;
.const-buttons{
  top: 4rem;
  bottom:2rem;
  margin-bottom:6rem !important;
  overflow:hidden !important;
  padding-bottom: 3rem;
  
}
.Columns{
  min-width:100% !important;
  max-width: 100% !important;
}
@media(max-width:786px){
display:grid;
grid-template-columns: repeat(1, auto);
justify-items:center;
align-items:center;
}
}
`

const TextPage = styled.div`
position: relative;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:100%;
height:auto;
padding-right:3rem;
@media(max-width:992px){
padding-right:0 !important;
min-width:100% !important;
max-width:100% ! important;
min-height: auto !important;
height:auto;

};
@media only screen and (max-width: 786px) and (min-width: 300px)  {
padding: 0 !important;
transform:translateY(1%);

}
`
const BUTTON = styled(Button)`
background-color: #1c1cf0  !important;
border: 0px solid;
text-align:center;
.constitute{
  background-color: #c30101  !important;
}
@media(max-width:992px){
  min-width:100% !important;
  max-width: 100% !important;
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
