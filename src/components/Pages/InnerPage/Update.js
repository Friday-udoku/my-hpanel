import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import PrivatePageLink from '../../Header/DropdownContainer/PrivatePageLink'
import Modals from '../../Header/DropdownContainer/Modals'

const Update = () => {
  return (
    <div className='relative h-100vh top-0' style={{marginTop:'-3rem'}}>
            { <PrivatePageLink mode={Modals} className='fixed top-0' />}
     <Updates className='update relative top-32'>
    <table class="table caption-top">
  <caption><span className='events-title' style={{color:'red', fontSize:'1.5rem', padding:'2rem', fontWeight:'800'}}>Party Donation / Contribution Update</span></caption>
  <thead >
    <tr>
      <th className='text-primary' scope="checkbox"><span><b>Status</b></span></th>
      <th scope="col" colspan='2'><span style={{fontSize:'1.3rem'}}>Contribution</span></th>
    </tr>
  </thead>
  <tbody>
    
<tr>
<th scope="row">
 <div className="form-check">
 <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
</div>
</th>
<td>Emeka Onwuzo</td>
<td>€100</td>
    </tr>

    <tr>
      <th scope="row">
      <div className="form-check">
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
  </div>
      </th>
      <td>Francis Udoku</td>
      <td>€100</td>
    </tr>

    <tr>
      <th scope="row" >
      <div className="form-check">
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
  </div>
      </th>
      <td>Kinsley Agoha</td>
      <td>€100</td>
    </tr>
    <tr>
      <th scope="row" >
      <div className="form-check">
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
  </div>
      </th>
      <td>Charles Obodoechina</td>
      <td>€100</td>
    </tr>

    <tr>
      <th scope="row" >
      <div className="form-check">
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
  </div>
      </th>
      <td>Obinna</td>
      <td>€100</td>
    </tr>

    <tr>
      <th scope="row" >
      <div className="form-check">
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
  </div>
      </th>
      <td>Chijioke Ogujawa</td>
      <td>€100</td>
    </tr>

    <tr>
      <th scope="row" >
      <div className="form-check">
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
  </div>
      </th>
      <td>Emmanuel</td>
      <td>€100</td>
    </tr>
    <tr>
      <th scope="row" >
      <div className="form-check">
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
  </div>
      </th>
      <td>Soluchi Nwaosu</td>
      <td>€100</td>
    </tr>

    <tr>
      <th scope="row" >
      <div className="form-check">
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
  </div>
      </th>
      <td>Ugo</td>
      <td>€100</td>
    </tr>
    <tr>
      <th scope="row" >
      <div className="form-check">
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
  </div>
      </th>
      <td>Jerry obi Jnr</td>
      <td>€100</td>
    </tr>

  </tbody>
  
  <thead >
    <tr>
      <th className='text-primary' scope="checkbox"><b>Status</b></th>
      <th scope="col" colspan='2'> <span style={{fontSize:'1.3rem'}}>Donations / Pledges</span></th>
    </tr>
  </thead>
  <tbody>
    
<tr>
<th scope="row">
<div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
</th>
<td>Emeka</td>
<td> 2 litres of Scottish whisky</td>
    </tr>

    <tr>
      <th scope="row">
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Emmanuel </td>
      <td>3 bottles of James</td>
    </tr>

    <tr>
      <th scope="row" >
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Nwadike</td>
      <td>€120</td>
    </tr>

    <tr>
      <th scope="row" >
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Hilary</td>
      <td>€40</td>
    </tr>
    
    <tr>
      <th scope="row" >
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Aloys</td>
      <td>€30</td>
    </tr>
    <tr>
      <th scope="row" >
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Obidi from Derry</td>
      <td>£50</td>
    </tr>

    <tr>
      <th scope="row" >
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Chidi</td>
      <td>1 bottle of Jagamaster</td>
    </tr>

    <tr>
      <th scope="row" >
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Obinna</td>
      <td>€100</td>
    </tr>
    <tr>
      <th scope="row" >
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Kinsley</td>
      <td>2 bottles of James</td>
    </tr>
    <tr>
      <th scope="row" >
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Charley</td>
      <td>24 bottles of Nigeria Guiness + 1 litre of Jack Daniels and 5 cartoons of water</td>
    </tr>
    <tr>
      <th scope="row" >
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Ugo</td>
      <td>€250</td>
    </tr>
    <tr>
      <th scope="row" >
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Edozie</td>
      <td>€100</td>
    </tr>
    <tr>
      <th scope="row" >
      <div className="form-check">
  <input  type="checkbox" enabled='enabled' checked ='checked'/>
</div>
      </th>
      <td>Chidiebere & Innocent</td>
      <td>24 bottles of Nigeria Guiness</td>
    </tr>
    <tr>
      <th scope="row" >
      <input  type="checkbox" enabled="enabled" checked="checked"/>

      </th>
      <td>Francis</td>
      <td>Will pay for Venue</td>
    </tr>

  </tbody>
  


</table>
            </Updates>

    </div>
  )
}

export default Update
const Updates = styled(Container)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:3rem !important;
@media(max-width:992px){
.events-title{
  font-size:1.2rem !important;
}

}
input[type=checkbox]{
  background:blue !important
}
`