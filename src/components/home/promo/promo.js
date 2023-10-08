import './promo.css'
import { Parallax } from 'react-parallax';
import promo1 from './promo4.jpg';


const Promo = () => {

    return (
        <div>
            <Parallax strength={600} bgImage={promo1}>
                <div className="promo pad">
			        <div className="container-fluid">

				        <div className="promo-element ">
					        <h3>Music An Art...</h3>
					        <p>Music is an art form and cultural activity whose medium is sound organized in time. The common elements of music are <strong>pitch</strong>, <strong>rhythm</strong>, <strong>dynamics</strong> and the sonic qualities of <strong>timbre</strong> and <strong>texture</strong>.</p>
					        <a className="promo-link" href="#"><i class="fa fa-play-circle"></i></a>
				        </div>

			        </div>

		        </div>
            </Parallax>
        </div>
			
    )
 
}

export default Promo;