import React from 'react';

function Card({ image, title, description }) {
  return (
    <div class="portfolio-content" id="portfolioOwl">
        <div className="card ">
            <img class="img-responsive" src={image} alt="product image" width='200' height='400' />
            <div class="p-transparent"></div>
            <div class="">
                <h3>{title}</h3><hr />
                <p>{description}</p>
                <a href="#"><i class="fa fa-share"></i></a>
            </div>
        </div>
    </div>
  );
}

export default Card;

{/*
<div class="portfolio pad" id="portfolio">
				<div>
					<!-- default heading -->
					<div class="default-heading">
						<!-- heading -->
						<h2>Portfolio</h2>
					</div>
				</div>
				<!-- portfolio -->
				<div class="portfolio-content" id="portfolioOwl">
					<div class="item">
						<!-- item image -->
						<img class="img-responsive" src="img/portfolio/1.jpg" alt="">
						<!-- transparent background -->
						<div class="p-transparent"></div>
						<!-- on mouse hover details -->
						<div class="p-hover">
							<!-- heading /title -->
							<h3>Album Title</h3><hr>
							<!-- project details -->
							<p>Some details about album.</p>
							<!-- icon -->
							<a href="#"><i class="fa fa-share"></i></a>
						</div>
					</div>

                </div>
    </div>

*/}