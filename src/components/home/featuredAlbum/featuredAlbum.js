import './featuredAlbum.css'
import image1 from './album.JPG'
import 'animate.css'

const FeaturedAlbum = () => {
    
    return (
        <div>
            <div className="featured pad" id="featuredalbum">
				<div className="container-fluid">
					<div className="default-heading">
						<h2>Featured Song</h2>
					</div>
					<div className="featured-element">
						<div className="row">
							<div className="col-md-4 col-sm-6">
								<div className="featured-item ">
									<div className="figure">
										<img className="img-responsive box" src={image1} alt="" />
										<p className='bg-primary animate__animated animate__bounce animate__slow'>There are many variations of passages available, but the majority have suffered Lorem alteration in some form, by injected look even slightly believable.</p>
									</div>
									<div className="featured-item-info">
										<h4>Power Pop</h4>
										<hr />
										<p>1024+ <span className="badge bg-primary">Like</span> &nbsp;&nbsp; 825+ <span className="badge bg-primary">Love</span></p>
									</div>
								</div>
							</div>

                            <div className="col-md-4 col-sm-6">
								<div className="featured-item ">
									<div className="figure">
										<img className="img-responsive" src={image1} alt="" />
										<p className='bg-primary'>There are many variations of passages available, but the majority have suffered Lorem alteration in some form, by injected look even slightly believable.</p>
									</div>
									<div className="featured-item-info">
										<h4>Bad Brains</h4>
										<hr />
										<p>1024+ <span className="badge bg-primary">Like</span> &nbsp;&nbsp; 825+ <span class="badge bg-primary">Love</span></p>
									</div>
								</div>
							</div>
														<div className="col-md-4 col-sm-6">
								<div className="featured-item ">
									<div className="figure">
										<img className="img-responsive" src={image1} alt="" />
										<p className='bg-primary'>There are many variations of passages available, but the majority have suffered Lorem alteration in some form, by injected look even slightly believable.</p>
</div>
									<div className="featured-item-info">

										<h4>Bad Brains</h4>
<hr />	
										<p>1024+ <span className="badge bg-primary">Like</span> &nbsp;&nbsp; 825+ <span class="badge bg-primary">Love</span></p>
</div></div></div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default FeaturedAlbum