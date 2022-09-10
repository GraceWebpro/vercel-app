import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaApple, FaSpotify, FaAmazon, FaTiktok } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import './Footer.css'

const Footer = () => {

  return (
    
    <div className='footer'>
      <iframe title="Newsletter" width="500" height="305" src="https://d2b30406.sibforms.com/serve/MUIEAKGIGGqPdxJEA-uGCqznADiXN769Istasg6DDylHtL-tlkZR5H1tRlMLiNxVlKH2y2E8DyNK74jxGlTJs8S3KafTqY6mYjjiBcS77C9-Qeu6RD8A2GymmDWlB7sFNnMCHV4rwt3l6OfUUWuOg24cGA2hQBBgcLZRvhRaOTJsvGkrZxpE8I0cDvCaB4lrAGLZQv4zXNCkXvJS" frameborder="0" scrolling="no" allowfullscreen ></iframe>
      <div className='icon'>

        <a href='https://web.facebook.com/michaelo.wilson07?_rdc=1&_rdr'><IconContext.Provider value={{color: "white", size: "20px" }}><FaFacebookF onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://twitter.com/MichaelOWilson3'><IconContext.Provider value={{color: "white", size: "20px" }}><FaTwitter onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://www.instagram.com/michaelowilson1/'><IconContext.Provider value={{color: "white", size: "20px" }}><FaInstagram onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://www.youtube.com/c/MichaelOWilson'><IconContext.Provider value={{color: "white", size: "20px" }}><FaYoutube onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://music.apple.com/ng/artist/michael-o-wilson/1573150748'><IconContext.Provider value={{color: "white", size: "20px" }}><FaApple onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://open.spotify.com/artist/4brI3sZxiTwETXLpCpVCc2'><IconContext.Provider value={{color: "white", size: "20px" }}><FaSpotify onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://music.amazon.com/artists/B09MR7YSZG/michael-o-wilson'><IconContext.Provider value={{color: "white", size: "20px" }}><FaAmazon onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://www.tiktok.com/@michaelo.wilson?lang=en'><IconContext.Provider value={{color: "white", size: "20px" }}><FaTiktok onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
      
      </div>

    </div>
    
  )
}

export default Footer