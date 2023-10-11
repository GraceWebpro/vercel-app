import './event.css'
import { Parallax } from 'react-parallax';
import promo1 from '../promo/promo3.jpg';
import image1 from './album.JPG'


const Event = () => {
	return (
		<div>
		    <Parallax strength={600} bgImage={promo1}>
		<div className="events pad" id="events">
				<div className="container-fluid">
					<div className="default-heading">
						<h2>Coming Events</h2>
					</div>
					<div className="events-element">
						<div className="row">
							<div className="col-md-6 col-sm-6">
								<div className="events-item ">
									<div className="figure">
										<div className="event-date">
											24 <span className="emonth">Jan</span>
											<div className="clearfix"></div>
											<span className="etime">06:30 pm</span>
										</div>
										<span className="event-location"><i class="fa fa-map-marker"></i> New York</span>
										<img className="img-responsive" src={image1} alt="" />
										<div className="img-hover">
											<a href="#"><i className="fa fa-play-circle"></i></a>
										</div>
									</div>
									<div className="event-info">
										<h3>Sound Of melodi In Instrumesnts</h3>
										<hr className='w-100 ' />
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed doconsect etur eiusmod teme et dolore magna aliqua... <a href="#" className='text-danger'>more</a></p>
										<button href="#bookTicket" className="btn btn-lg btn-primary" data-toggle="modal" >Book Ticket</button>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-sm-6">
								<div className="events-item ">
									<div className="figure">
										<div className="event-date">
											31 <span className="emonth">Jan</span>
											<div className="clearfix"></div>
											<span className="etime">09:45 pm</span>
										</div>
										<span className="event-location"><i class="fa fa-map-marker"></i> Romania</span>
										<img className="img-responsive" src={image1} alt="" />
										<div className="img-hover">
											<a href="#"><i class="fa fa-play-circle"></i></a>
										</div>
									</div>
									<div className="event-info">
										<h3>Rock Music Festival at City Life Mall</h3>
										<hr className='w-100' />
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed doconsect etur eiusmod teme et dolore magna aliqua... <a href="#" className='text-danger'>more</a></p>
										<button href="#bookTicket" className="btn btn-lg btn-primary" data-toggle="modal" >Book Ticket</button>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-sm-6">
								<div className="events-item ">
									<div className="figure">
										<div className="event-date">
											14 <span className="emonth">Feb</span>
											<div className="clearfix"></div>
											<span className="etime">10:30 am</span>
										</div>
										<span className="event-location"><i class="fa fa-map-marker"></i> New Delhi</span>
										<img className="img-responsive" src={image1} alt="" />
										<div className="img-hover">
											<a href="#"><i class="fa fa-play-circle"></i></a>
										</div>
									</div>
									<div className="event-info">
										<h3>Fashion Show Light At Hollywood</h3>
										<hr className='w-100' />
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed doconsect etur eiusmod teme et dolore magna aliqua... <a href="#" className='text-danger'>more</a></p>
										<button href="#bookTicket" className="btn btn-lg btn-primary" data-toggle="modal" >Book Ticket</button>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-sm-6">
								<div className="events-item ">
									<div className="figure">
										<div className="event-date">
											31 <span className="emonth">Mar</span>
											<div className="clearfix"></div>
											<span className="etime">10:00 pm</span>
										</div>
										<span className="event-location"><i class="fa fa-map-marker"></i> New Delhi</span>
										<img className="img-responsive" src={image1} alt="" />
										<div className="img-hover">
											<a href="#"><i class="fa fa-play-circle"></i></a>
										</div>
									</div>
									<div className="event-info">
										<h3>Fashion Show Light At Hollywood</h3>
										<hr className='w-100' />
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed doconsect etur eiusmod teme et dolore magna aliqua... <a href="#" className='text-danger'>more</a></p>
										<button href="#bookTicket" className="btn btn-lg btn-primary" data-toggle="modal" >Book Ticket</button>
									</div>
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

export default Event;


