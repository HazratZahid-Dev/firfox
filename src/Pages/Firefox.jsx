import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Firefox.css'
import { FaArrowLeft, FaArrowRight, FaRedoAlt, FaBars, FaChevronDown, FaFileImport, FaSearch, FaRegSun, FaSistrix } from "react-icons/fa";
import logo from '../images/index.jpg'
import boot from '../images/boot.png'
import face from '../images/face.png'
import fiver from '../images/fiver.png'
import insta from '../images/insta.jpg'
import you from '../images/you.png'
import google from '../images/google.png'
// import skype from '../images/index.png'
// import whats1 from '../images/whats1.png'

const Firefox = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <className className='col-2 Arrow'>
            <p className='Arrow-gap  '><FaArrowLeft /> <FaArrowRight /> <FaRedoAlt /></p>
          </className>
          <div className='col-8 top-search flex'>
            {/* <div><FaSearch/></div> */}
            {/* <nav class="navbar navbar-light ">  
            {/* <input class="form-control search" type="search" placeholder="Search with google or enter address" aria-label="Search" /> }  
            </nav> */}
            <FaSistrix className='search-icon' />
            <div>

              <input type='search' className='upper-search' placeholder='Search with Google '></input>
            </div>


          </div>
          <className className='col-2 Right-arrow'>
            <p className='Right-Arrow-gap'><FaChevronDown /> <FaBars /></p>
          </className>
        </div>
      </div>
      {/* <div className='firefox-header'>
            <p><FaArrowLeft/> <FaArrowRight/> <FaCircleNotch/></p>
            <input className='firefox-input' type='text' placeholder='Seach with google or enter address'></input>
        </div> */}

      <div className='container-fluid '>
        <div className='row '>
          <div className='col-4 hr-top  '>
            <div className='bookmark '><p ><FaFileImport className='import' /></p><p>Import boolmarks...</p></div>
            <p> <img src={logo} className="firefox-log " alt='logo' />  Getting Started</p>
          </div>
          <div className='col-8'></div>
        </div>
      </div>
      <hr />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-11'></div>
          <div className='col-1 setting'><FaRegSun /></div>
        </div>
      </div>
      <div className='container-fluid '>
        <div className='row '>
          <div className='col-12 fire-main-logo'>
            <div ><img className="fire-main mb-1" src={logo} alt='logo' /></div>
            <div><h1 className='fire-h mt-2'>  Firefox</h1></div>

          </div>

        </div>
      </div>

      <div className='container-fluid '>
        <div className='row '>
          <div className='col-2'></div>
          <div className='col-8 fire-main-logo'>
            <img src={google} className='google' alt='google'></img>
            <input className='middle-search' type="text" placeholder="Search with google " />

          </div>
          <div className='col-2'></div>

        </div>
      </div>

      <div className='container '>
        <div className='row '>
          <div className='col-12 main-section-icon flex'>
            <div className='middle-image '>
              <img className='all-image mt-2' src={boot} alt='boot'></img>
              <p className='icon-para'>getbootstrap</p>
            </div>
            <div className='fiver middle-image'>
              <img className='all-image mt-2' src={face} alt='boot'></img>
              <p className='icon-para'>facebook</p>
            </div>
            <div className='youtube middle-image'>
              <img className='all-image mt-2' src={fiver} alt='boot'></img>
              <p className='icon-para'>fiver</p>
            </div>
            <div className='bootstrap middle-image'>
              <img className='all-image  mt-2' src={insta} alt='boot'></img>
              <p className='icon-para'>instagram</p>
            </div>
            
            
            
            
            
          </div>


        </div>
      </div>
    </>
  )
}

export default Firefox