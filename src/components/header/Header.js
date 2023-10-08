import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaApple, FaSpotify, FaAmazon, FaTiktok, FaMusic, FaVideo, FaBars, FaTimes } from 'react-icons/fa'
import { GiNewspaper } from 'react-icons/gi'
import { GrContact } from 'react-icons/gr'
//import { RiUserFollowFill } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib';


const Header = () => {
    
  return (
    <div className='nav'>
        <input type='checkbox' id='check' />
        <label htmlFor='check'>
            <FaBars id='btn' />
            <FaTimes id='cancel' />
        </label>
        <div className='navbar'>
            
            <div className='socials-icon'>

                <a href='https://web.facebook.com/michaelo.wilson07?_rdc=1&_rdr' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "black", size: "15px" }}><FaFacebookF onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#000"} /></IconContext.Provider></a>
                &nbsp;&nbsp;
                <a href='https://twitter.com/MichaelOWilson3' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "black", size: "15px" }}><FaTwitter onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#000"} /></IconContext.Provider></a>
                &nbsp;&nbsp;
                <a href='https://www.instagram.com/michaelowilson1/' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "black", size: "15px" }}><FaInstagram onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#000"} /></IconContext.Provider></a>
                &nbsp;&nbsp;
                <a href='https://www.youtube.com/c/MichaelOWilson' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "black", size: "15px" }}><FaYoutube onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#000"} /></IconContext.Provider></a>
                &nbsp;&nbsp;
                <a href='https://music.apple.com/ng/artist/michael-o-wilson/1573150748' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "black", size: "15px" }}><FaApple onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#000"} /></IconContext.Provider></a>
                &nbsp;&nbsp;
                <a href='https://open.spotify.com/artist/4brI3sZxiTwETXLpCpVCc2' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "black", size: "15px" }}><FaSpotify onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#000"} /></IconContext.Provider></a>
                &nbsp;&nbsp;
                <a href='https://music.amazon.com/artists/B09MR7YSZG/michael-o-wilson' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "black", size: "15px" }}><FaAmazon onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#000"} /></IconContext.Provider></a>
                &nbsp;&nbsp;
                <a href='https://www.tiktok.com/@michaelo.wilson?lang=en' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "black", size: "15px" }}><FaTiktok onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#000"} /></IconContext.Provider></a>

            </div>
            <div className='header-list'>
                
                <Link className='link' to='/music'>Music</Link>
                <Link className='link' to='/news'>News</Link>
                <Link style={{textDecoration:'none'}} to='/'><h3 className='web-name'>Michael O. Wilson</h3></Link>
                <Link className='link' to='/video'>Video</Link>
                <Link className='link' to='/contact'>Contact</Link>
                {/*<div className='dropdown'>
                    <button className='drop-link link'>Follow</button>
                    <div className='drop-menu'>
                        <div className='down-links'>
                        

                        <a href='https://web.facebook.com/michaelo.wilson07?_rdc=1&_rdr' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "15px" }}><FaFacebookF onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  Facebook</IconContext.Provider></a>
                            <br />
                            <a href='https://twitter.com/MichaelOWilson3' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "15px" }}><FaTwitter onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  Twitter</IconContext.Provider></a>
                          <br />
                            <a href='https://www.instagram.com/michaelowilson1/' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "15px" }}><FaInstagram onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  Instagram</IconContext.Provider></a>
                            <br />
                            <a href='https://www.youtube.com/c/MichaelOWilson' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "15px" }}><FaYoutube onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  YouTube</IconContext.Provider></a>
                            <br />
                            <a href='https://music.apple.com/ng/artist/michael-o-wilson/1573150748' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "15px" }}><FaApple onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  Apple</IconContext.Provider></a>
                          <br />
                            <a href='https://open.spotify.com/artist/4brI3sZxiTwETXLpCpVCc2' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "15px" }}><FaSpotify onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  Spotify</IconContext.Provider></a>
                           <br />
                            <a href='https://music.amazon.com/artists/B09MR7YSZG/michael-o-wilson' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "15px" }}><FaAmazon onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />   Amazon</IconContext.Provider></a>
                           <br />
                            <a href='https://www.tiktok.com/@michaelo.wilson?lang=en' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "15px" }}><FaTiktok onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  TikTok</IconContext.Provider></a>

                            
                        </div>

                    </div>
                </div>*/}
                
            </div>
        </div>
        <div className="list">
            <header>__________________</header>
            <ul>
                <li><Link className='drop-link' to='/music'><IconContext.Provider value={{color: "white", size: "20px" }}><FaMusic />&nbsp;&nbsp;Music</IconContext.Provider></Link></li>
                <li><Link className='drop-link' to='/news'><IconContext.Provider value={{color: "white", size: "20px" }}><GiNewspaper />&nbsp;&nbsp;News</IconContext.Provider></Link></li>
                <li><Link className='drop-link' to='/video'><IconContext.Provider value={{color: "white", size: "20px" }}><FaVideo />&nbsp;&nbsp;Video</IconContext.Provider></Link></li>
                <li><Link className='drop-link' to='/contact'><IconContext.Provider value={{color: "white", size: "20px" }}><GrContact />&nbsp;&nbsp;Contact</IconContext.Provider></Link></li>
                {/*<li>
                    <div className='dropdown'>
                        <button className='drop-link'><IconContext.Provider value={{color: "white", size: "20px" }}><RiUserFollowFill />&nbsp;&nbsp;Follow</IconContext.Provider></button>
                        <div className='drop-menu'>
                            <div className='down-links'>
                            <div>
                                <a href='https://web.facebook.com/michaelo.wilson07?_rdc=1&_rdr' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "18px" }}><FaFacebookF onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  Facebook</IconContext.Provider></a>
                            </div> 
                            <div>  
                                <a href='https://twitter.com/MichaelOWilson3' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "18px" }}><FaTwitter onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  Twitter</IconContext.Provider></a>
                            </div>
                            <div> 
                                <a href='https://www.instagram.com/michaelowilson1/' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "18px" }}><FaInstagram onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  Instagram</IconContext.Provider></a>
                            </div>
                            <div>
                                <a href='https://www.youtube.com/c/MichaelOWilson' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "18px" }}><FaYoutube onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  YouTube</IconContext.Provider></a>
                            </div>
                            <div>      
                                <a href='https://open.spotify.com/artist/4brI3sZxiTwETXLpCpVCc2' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "18px" }}><FaSpotify onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  Spotify</IconContext.Provider></a>
                            </div>
                            <div>   
                                <a href='https://www.tiktok.com/@michaelo.wilson?lang=en' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "18px" }}><FaTiktok onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />  TikTok</IconContext.Provider></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </li>*/}
            </ul>
        </div>
        
        
        
    </div>
  )
}

export default Header