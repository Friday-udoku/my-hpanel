
import { React, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PrivatePageLink from '../../Header/DropdownContainer/PrivatePageLink';
import Footer from '../../Footer/Footer';
import { TableFooter } from '@mui/material';
import Modals from '../../Header/DropdownContainer/Modals';
import styled from 'styled-components';
import { Routes, Route, useNavigate, Link, Navigate } from 'react-router-dom';
import Minutes from '../Minutes';
import { FaQuoteLeft, FaQuoteRight, FaRegCalendarCheck } from 'react-icons/fa'

const Oct2022Meeting = () => {
  return (
    <div className='relative h-100vh'>
      {<PrivatePageLink mode={Modals} className='fixed top-0' />}

      <Container className=' fluid minutes-pages'>
          
          <div className = 'minutes-text text-dark '>

          <TextPage className='py-5 relative top-20 bottom-20 pb-10 w-100'>

                <h2 className='minutes-title'><strong> Minutes for October </strong></h2>
                <p><b>Date:</b> 9/10/2022</p>

                <p><strong>Members Present:</strong> Kingsley Agoha, Austine Okeagu, Chuks Ogujawa, Charles Obodoechina, Francis Udoku, Emeka Onwunzo, Emmanuel </p>
                <p><strong>Absentees:</strong> Chijioke, Ugo, Chidi, Edozie, Chidiebere and Billy</p>

                <p><strong>Proceedings:</strong> Meeting was called to order at 5pm. The open prayer was said Emeka Onwunzo. The minutes of the meeting were taken by the chairman and previous minutes were also read him. Motion to approve the minutes was made by francis, seconded by Kingsley. 
                </p>

               <h4>Agenda 1</h4>

                <p>
                <strong className='text-primary'>Charity status update: </strong>Francis updated the members following a discussion at Mr Gabriel's that the constitution had been circulated as agreed and members had acknowledged receipt. They also have promised to provide feedback shortly. Although no feedback has yet been recevied but he believes that they are working on it as they do communicate regularly. Francis apologises for not being able to work on the application process as he has been busy developing our website.  
                </p>

               <h4>Agenda 2</h4>
                <p>
                <strong className='text-primary'>  Financial and bank signatories: </strong>
                Chairman asked Chuck and Francis if Ugo had communicated with them regarding the bank and financial signatories as discussed in the last meeting. Chuck replied no. It was decided that Francis and Emeka would accompany Chuck to the bank to resolve the signatory's issue.

                </p>
               <h4>Agenda 3</h4>
                <article>
                <strong className='text-primary'>
                End of year/Welcome Party:  
                </strong>

                The chairman asked for an update regarding the end of year party, as well as our ideas for the welcome party for Father Ohara. Emeka believes that the welcome party is a worthwhile idea because the Rev father did a good job. However, he was concerned about funding and the venue, unsure of how they could be handled. In view of funding, Chucks asked if there would be a mandatory contribution in addition to our normal contribution or would our usual approach apply? Francis noted that we might get some support from people when the event approaches. <p>Chuk advised that we should work with what we have, and external support would be a plus.
               Francis pointed out that choosing a venue around the Ballybofey{'/'}Stranorlar area would be strategic as it would encourage the friends and family of Father Ohara to attend the program. Emeka warned that we might not be allowed to bring our food or decorate the venue as we wish.Emmanuel strongly advised that the venue should be arranged first, and the theme welcome party should be replaced by an appreciation party. In the end, it was decided that we should maintain our usual fund-raising method and a contribution of 100 euros should be made by each member towards the event. Also, Francis and Emeka were directed to find a venue and report back to the group at the next meeting. </p>
               In addition, <u> End of Year  {'/'} Appreciation Party</u> was chosen as the theme of the event instead of <u>End of Year {'/'} welcome Party</u> Furthermore, Emeka noted that we are unsure which member of the executive is the financial Secretary- emphasizing that the end of the year is fast approaching, and it's critical that we have an annual financial statement for informed decision-making. He complained that some people had not paid their dues and other contributions that needed to be recorded. Chairman acknowledged the point and expressed concerns about Ugo's refusal to fulfill his obligations - stressing that he was elected to serve in the position, and he is expected to execute his duties as assigned. However, he promised to speak to Ugo before the next meeting
                                 
                </article>

                <p><strong>Matters Arising:</strong> Mr Francis suggested that we upgrade our masquerade because it will attract more events to the association,
                  chairman agreed and to discuss in the next meeting

                </p>
                <p><strong>Finance: </strong>
                  80 EUROS collected from 8 members present.

                </p>
              </TextPage>
            </div>

            <div className='minutes-buttons'>
            <div className = ' relative'>
              <h2 className='d-flex w-100'>
                <span><FaRegCalendarCheck className='mt-1 mx-1 me-2 text-red-700' />
                </span><b className='text-dark pb-4'>Minutes by Date</b></h2>

              <div className =' relative  grid grid-cols-1 gap-3 '
          >



                <BUTTON as={Link} to='/Feb2022Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes for Feb | 13/02/2022</BUTTON>

                <BUTTON as={Link} to='/Match2022Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes  for March | 13/05/2022</BUTTON>

                <BUTTON as={Link} to='/April2022Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes  for April | 10/05/2022</BUTTON>

                <BUTTON as={Link} to='/May2022Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes for May | 8/05/2022</BUTTON>

                  <BUTTON as={Link} to='/June2022Meeting' 
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                    Minutes for June | 12/05/2022</BUTTON>

                <BUTTON as={Link} to='/Sept2022Meeting'
                  className='px-5 py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes  for Sept | 18/05/2022</BUTTON>

                  <BUTTON as={Link} to='/Oct2019Meeting'
                  className='px-2 text-center py-2 text-decoration-none text-light shadow-none border-none outline-line'>
                  Minutes  for Oct | 13/10/2019</BUTTON>

                <BUTTON className='constution shadow-none border-none outline-line px-5 py-2 text-decoration-none text-light '
                  as={Link} to='/Minutes'>
                Back to the Constitution Page</BUTTON>
              </div>
          </div>
          </div>
        </Container>
  {<Footer/>}
    </div>



  )
}

export default Oct2022Meeting

const ROW = styled(Row)`
position:relative;
min-height:80vh;
height:auto;
@media(max-width:992px){
  margin-bottom:15rem !important;

}
`
const TextPage = styled.div`
min-height:100vh !important;
height:auto;
padding-right:2rem !important;
margin-bottom:5rem !important;
@media(max-width:992px){
  padding-right:2rem !important;
}
`
const BUTTON = styled(Button)`
border-radius: 10px !important;
:not(.constution){background-color: #1c1cf0  !important;
border: 0px solid;


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