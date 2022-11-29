import React from 'react'
import imageyam from '../components/newYam.jpg'
import imagewine from '../components/pamWine.jpg'

const Page = () => {
  return (
    <div>

<div className="text-light bg-secondary px-5 w-100 text-center d-flex flex-column justify-content-center align-items-center">

<nav className="navbar navbar-expand-lg bg-transparent w-100 container-fluid mt-3">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" style={{color:'black', fontSize:'1.3rem', fontWeight:'800'}} href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" style={{color:'white', fontSize:'1.2rem', fontWeight:'600'}} href="#"><u>Home</u></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:'white', fontSize:'1.2rem', fontWeight:'600'}} href="#"><u>Bizzare</u></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:'white', fontSize:'1.2rem', fontWeight:'600'}} href="#"><u>Marketing</u></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


<h1 className="relative top-6 my-3">Hello ndi nkem!</h1>
<div className="container" style={{paddingTop: '3px', paddingRight: '5rem', paddingLeft: '5rem'}}>
    We the members of this association are glad to welcome you all to the occassion. It is quite understable how tight and conflicting it could with schedules and programms at this time of the year. However, you have  defiled all odds to graze this occassion and making it a memorable one. once again, thank you for comming. Our mission is quite simple and for the betterment of everyone regardlesds your social className or ethicity or racial status.
</div>
<hr className="text-light pt-2 pb-3 w-75" />
<div className="cover mt-5 w-100 d-flex justify-content-between align-items-center">

<div className="image d-flex justify-content-around" style={{minWidth:'50%', maxHeight: '10rem', marginBottom: '2'}}>
<img src={imageyam} className="img-fluid " alt ={""} style={{maxHeight:'300px'}} />

<img src={imagewine} className="img-fluid ml-3" alt ={""} style={{maxHeight:'300px'}}/>

</div>

    <div className="forms bg-success mt-5" style={{minWidth:'20rem'}}>
        <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
    </div>
  
   
</div>

<div className="footer mt-5 mx-0" style={{minWidth:'100vw', background:'lightgray', color:'#000'}} >
    <div className="card text-center " style={{minWidth:'100vw', background:'lightgray', color:'#000'}}>
        <div className="card-header">
          Featured
        </div>
        <div className="card-body" style={{minWidth:'100vw', background:'#ccc', color:'#000'}}>
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>
</div>


</div>

        
    </div>
  )
}

export default Page