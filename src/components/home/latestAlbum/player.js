import './player.css';
import Logo from './album.JPG'
import AudioPlayer1 from './audio/audio1'
import AudioPlayer2 from './audio/audio2'
import AudioPlayer3 from './audio/audio3'
import AudioPlayer4 from './audio/audio4'
import { BsFillPlayFill } from "react-icons/bs"; // icons for next and previous track




const Player = () => {


  return (
    <div>
        <div className="container-fluid pad1">
            <div className='hero-content'>
                <h2>Latest Single</h2>
                <hr />
                <p>Lightening up the <strong className="text-primary">world</strong> through <strong className="text-primary">Music</strong>.</p>

            </div>
            <div className="hero-playlist">
                <div className='row'>
                    <div className="col-md-6 col-sm-6">
						<div className="figure">
							<img className="img-responsive" src={Logo} alt="" width='100px'/>
						</div>
						<div className="album-details">
							<h4>Perfect Melodi</h4>
							<h5>By Himanshu</h5>
							<p>Lorem Ipsum has been the industry's standard dummy text ever since 1500.</p>
							<a href="index" className="btn btn-lg btn-primary" id="playNowBtn"><BsFillPlayFill />&nbsp; Play Now</a>
						</div>
					</div>

                    <div className="col-md-6 col-sm-6">
						<div className="playlist-content">
							<h4 className='text-dark'>Recommended singles</h4>
                            <ul className="list-unstyled">
                                <AudioPlayer1 />

                                <AudioPlayer2 />

                                <AudioPlayer3 />

                                <AudioPlayer4 />
                            </ul>
                        </div>
                    </div>

                </div>

            
            </div>
        </div>

        
    </div>
  );
}

export default Player