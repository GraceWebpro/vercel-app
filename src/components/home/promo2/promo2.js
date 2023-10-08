import './promo2.css'
import { Parallax } from 'react-parallax';
import promo2 from '../promo/promo2.jpg';


const Promo2 = () => {

    return(
        <div>
		            <Parallax strength={600} bgImage={promo2}>

        <div className="cta pad">
				<div className="container-fluid">
					<div className="cta-element bg-primary">
						<div className="row">
							<div className="col-md-9 col-sm-8">
								<h3>Melodi, A Fully Rock Album Pro</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sectetur adipiscing elit, sed do eiusmod tempoad minim veniam consequat.</p>
							</div>
							<div className="col-md-3 col-sm-4">
								<div className="cta-btn text-center">
									<a href="r" className="btn btn-light btn-lg">Download Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			            </Parallax>

        </div>
    )
}

export default Promo2