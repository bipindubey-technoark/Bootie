import React from 'react';
import { useHistory } from 'react-router-dom';

function Homepage(props) {
	const { push } = useHistory();
	return (
		<>
			<div class="main-banner" id="home">
				<header class="header">
					<div class="container-fluid px-lg-5">
						<nav class="py-4">
							<div id="logo">
								<h1>
									{' '}
									<a href="index.html">
										<span
											class="fa fa-bold"
											aria-hidden="true"
										></span>
										ootie
									</a>
								</h1>
							</div>

							<label for="drop" class="toggle">
								Menu
							</label>
							<input type="checkbox" id="drop" />
							<ul class="menu mt-2">
								<li class="active">
									<a href="/">Home</a>
								</li>
								<li>
									<a href="about.html">About</a>
								</li>
								<li>
									<a href="blog.html">Blog</a>
								</li>
								<li>
									<label for="drop-2" class="toggle">
										Drop Down{' '}
										<span
											class="fa fa-angle-down"
											aria-hidden="true"
										></span>{' '}
									</label>
									<a href="#">
										Drop Down{' '}
										<span
											class="fa fa-angle-down"
											aria-hidden="true"
										></span>
									</a>
									<input type="checkbox" id="drop-2" />
									<ul>
										<li>
											<a href="blog.html">Blog</a>
										</li>
										<li>
											<a href="/shop">Shop Now</a>
										</li>
										<li>
											<a href="shop-single.html">
												Single Page
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="contact.html">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<div class="banner-info">
					<p>Trending of the week</p>
					<h3 class="mb-4">Casual Shoes for Men</h3>
					<div
						class="ban-buttons"
						onClick={() => {
							push('/shop');
						}}
					>
						<a class="btn">Shop Now</a>
						<a href="single.html" class="btn active">
							Read More
						</a>
					</div>
				</div>
			</div>
			<section class="about py-md-5 py-5">
				<div class="container-fluid">
					<div class="feature-grids row px-3">
						<div class="col-lg-3 gd-bottom">
							<div class="bottom-gd row">
								<div class="icon-gd col-md-3 text-center">
									<span
										class="fa fa-truck"
										aria-hidden="true"
									></span>
								</div>
								<div class="icon-gd-info col-md-9">
									<h3 class="mb-2">FREE SHIPPING</h3>
									<p>On all order over $2000</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 gd-bottom">
							<div class="bottom-gd row bottom-gd2-active">
								<div class="icon-gd col-md-3 text-center">
									<span
										class="fa fa-bullhorn"
										aria-hidden="true"
									></span>
								</div>
								<div class="icon-gd-info col-md-9">
									<h3 class="mb-2">FREE RETURN</h3>
									<p>On 1st exchange in 30 days</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 gd-bottom">
							<div class="bottom-gd row">
								<div class="icon-gd col-md-3 text-center">
									{' '}
									<span
										class="fa fa-gift"
										aria-hidden="true"
									></span>
								</div>

								<div class="icon-gd-info col-md-9">
									<h3 class="mb-2">MEMBER DISCOUNT</h3>
									<p>Register & save up to $29%</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 gd-bottom">
							<div class="bottom-gd row">
								<div class="icon-gd col-md-3 text-center">
									{' '}
									<span
										class="fa fa-usd"
										aria-hidden="true"
									></span>
								</div>
								<div class="icon-gd-info col-md-9">
									<h3 class="mb-2">PREMIUM SUPPORT</h3>
									<p>Support 24 hours per day</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="about py-5">
				<div class="container pb-lg-3">
					<h3 class="tittle text-center">New Arrivals</h3>
					<div class="row">
						<div class="col-md-4 product-men">
							<div class="product-shoe-info shoe text-center">
								<div class="men-thumb-item">
									<img
										src="assets/images/s1.jpg"
										class="img-fluid"
										alt=""
									/>
									<span class="product-new-top">New</span>
								</div>
								<div class="item-info-product">
									<h4>
										<a href="shop-single.html">
											Bella Toes{' '}
										</a>
									</h4>

									<div class="product_price">
										<div class="grid-price">
											<span class="money">$675.00</span>
										</div>
									</div>
									<ul class="stars">
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-half-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-half-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-4 product-men">
							<div class="product-shoe-info shoe text-center">
								<div class="men-thumb-item">
									<img
										src="assets/images/s2.jpg"
										class="img-fluid"
										alt=""
									/>
									<span class="product-new-top">New</span>
								</div>
								<div class="item-info-product">
									<h4>
										<a href="shop-single.html">
											Chikku Loafers{' '}
										</a>
									</h4>

									<div class="product_price">
										<div class="grid-price">
											<span class="money">$475.00</span>
										</div>
									</div>
									<ul class="stars">
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-half-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-4 product-men">
							<div class="product-shoe-info shoe text-center">
								<div class="men-thumb-item">
									<img
										src="assets/images/s3.jpg"
										class="img-fluid"
										alt=""
									/>
									<span class="product-new-top">New</span>
								</div>
								<div class="item-info-product">
									<h4>
										<a href="shop-single.html">
											(SRV) Sneakers{' '}
										</a>
									</h4>

									<div class="product_price">
										<div class="grid-price">
											<span class="money">$575.00</span>
										</div>
									</div>
									<ul class="stars">
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-half-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-4 product-men my-lg-4">
							<div class="product-shoe-info shoe text-center">
								<div class="men-thumb-item">
									<img
										src="assets/images/s4.jpg"
										class="img-fluid"
										alt=""
									/>
									<span class="product-new-top">New</span>
								</div>
								<div class="item-info-product">
									<h4>
										<a href="shop-single.html">
											Shuberry Heels
										</a>
									</h4>

									<div class="product_price">
										<div class="grid-price">
											<span class="money">$575.00</span>
										</div>
									</div>
									<ul class="stars">
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-half-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-4 product-men my-lg-4">
							<div class="product-shoe-info shoe text-center">
								<div class="men-thumb-item">
									<img
										src="assets/images/s5.jpg"
										class="img-fluid"
										alt=""
									/>
									<span class="product-new-top">New</span>
								</div>
								<div class="item-info-product">
									<h4>
										<a href="shop-single.html">
											Red Bellies{' '}
										</a>
									</h4>

									<div class="product_price">
										<div class="grid-price">
											<span class="money">$575.00</span>
										</div>
									</div>
									<ul class="stars">
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-half-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-4 product-men my-lg-4">
							<div class="product-shoe-info shoe text-center">
								<div class="men-thumb-item">
									<img
										src="assets/images/s6.jpg"
										class="img-fluid"
										alt=""
									/>
									<span class="product-new-top">New</span>
								</div>
								<div class="item-info-product">
									<h4>
										<a href="shop-single.html">
											Catwalk Flats{' '}
										</a>
									</h4>

									<div class="product_price">
										<div class="grid-price">
											<span class="money">$575.00</span>
										</div>
									</div>
									<ul class="stars">
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-half-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-4 product-men">
							<div class="product-shoe-info shoe text-center">
								<div class="men-thumb-item">
									<img
										src="assets/images/s7.jpg"
										class="img-fluid"
										alt=""
									/>
									<span class="product-new-top">New</span>
								</div>
								<div class="item-info-product">
									<h4>
										<a href="shop-single.html">
											Running Shoes{' '}
										</a>
									</h4>

									<div class="product_price">
										<div class="grid-price">
											<span class="money">$675.00</span>
										</div>
									</div>
									<ul class="stars">
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-half-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-half-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-4 product-men">
							<div class="product-shoe-info shoe text-center">
								<div class="men-thumb-item">
									<img
										src="assets/images/s8.jpg"
										class="img-fluid"
										alt=""
									/>
									<span class="product-new-top">New</span>
								</div>
								<div class="item-info-product">
									<h4>
										<a href="shop-single.html">
											Sukun Casuals{' '}
										</a>
									</h4>

									<div class="product_price">
										<div class="grid-price ">
											<span class="money ">$775.00</span>
										</div>
									</div>
									<ul class="stars">
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-half-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-4 product-men">
							<div class="product-shoe-info shoe text-center">
								<div class="men-thumb-item">
									<img
										src="assets/images/s9.jpg"
										class="img-fluid"
										alt=""
									/>
									<span class="product-new-top">New</span>
								</div>
								<div class="item-info-product">
									<h4>
										<a href="shop-single.html">
											Bank Sneakers
										</a>
									</h4>

									<div class="product_price">
										<div class="grid-price">
											<span class="money">$875.00</span>
										</div>
									</div>
									<ul class="stars">
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-half-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span
													class="fa fa-star-o"
													aria-hidden="true"
												></span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="testimonials py-5">
				<div class="container">
					<div class="test-info text-center">
						<h3 class="my-md-2 my-3">Jenifer Burns</h3>

						<ul class="list-unstyled w3layouts-icons clients">
							<li>
								<a href="#">
									<span class="fa fa-star"></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-star"></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-star"></span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-star-half-o"></span>
								</a>
							</li>
						</ul>
						<p>
							<span class="fa fa-quote-left"></span> Lorem Ipsum
							has been the industry's standard since the 1500s.
							Praesent ullamcorper dui turpis.Nulla pellentesque
							mi non laoreet eleifend. Integer porttitor mollisar
							lorem, at molestie arcu pulvinar ut.{' '}
							<span class="fa fa-quote-right"></span>
						</p>
					</div>
				</div>
			</section>
			<section class="about py-5">
				<div class="container pb-lg-3">
					<h3 class="tittle text-center">Popular Products</h3>
					<div class="row">
						<div class="col-md-6 latest-left">
							<div class="product-shoe-info shoe text-center">
								<img
									src="assets/images/img1.jpg"
									class="img-fluid"
									alt=""
								/>
								<div class="shop-now">
									<a href="shop.html" class="btn">
										Shop Now
									</a>
								</div>
							</div>
						</div>
						<div class="col-md-6 latest-right">
							<div class="row latest-grids">
								<div class="latest-grid1 product-men col-12">
									<div class="product-shoe-info shoe text-center">
										<div class="men-thumb-item">
											<img
												src="assets/images/img2.jpg"
												class="img-fluid"
												alt=""
											/>
											<div class="shop-now">
												<a href="shop.html" class="btn">
													Shop Now
												</a>
											</div>
										</div>
									</div>
								</div>
								<div class="latest-grid2 product-men col-12 mt-lg-4">
									<div class="product-shoe-info shoe text-center">
										<div class="men-thumb-item">
											<img
												src="assets/images/img3.jpg"
												class="img-fluid"
												alt=""
											/>
											<div class="shop-now">
												<a href="shop.html" class="btn">
													Shop Now
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="brands py-5" id="brands">
				<div class="container py-lg-0">
					<div class="row text-center brand-items">
						<div class="col-sm-2 col-3">
							<a href="#">
								<span
									class="fa fa-connectdevelop"
									aria-hidden="true"
								></span>
							</a>
						</div>
						<div class="col-sm-2 col-3">
							<a href="#">
								<span
									class="fa fa-empire"
									aria-hidden="true"
								></span>
							</a>
						</div>
						<div class="col-sm-2 col-3">
							<a href="#">
								<span
									class="fa fa-ioxhost"
									aria-hidden="true"
								></span>
							</a>
						</div>
						<div class="col-sm-2 col-3">
							<a href="#">
								<span
									class="fa fa-first-order"
									aria-hidden="true"
								></span>
							</a>
						</div>
						<div class="col-sm-2 col-3 mt-sm-0 mt-4">
							<a href="#">
								<span
									class="fa fa-joomla"
									aria-hidden="true"
								></span>
							</a>
						</div>
						<div class="col-sm-2 col-3 mt-sm-0 mt-4">
							<a href="#">
								<span
									class="fa fa-dropbox"
									aria-hidden="true"
								></span>
							</a>
						</div>
					</div>
				</div>
			</section>
			<footer>
				<div class="container">
					<div class="row footer-top">
						<div class="col-lg-4 footer-grid_section_w3layouts">
							<h2 class="logo-2 mb-lg-4 mb-3">
								<a href="index.html">
									<span
										class="fa fa-bold"
										aria-hidden="true"
									></span>
									ootie
								</a>
							</h2>
							<p>
								Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex
								ea commodo consequat.
							</p>
							<h4 class="sub-con-fo ad-info my-4">
								Catch on Social
							</h4>
							<ul class="w3layouts_social_list list-unstyled">
								<li>
									<a href="#" class="w3pvt_facebook">
										<span class="fa fa-facebook-f"></span>
									</a>
								</li>
								<li class="mx-2">
									<a href="#" class="w3pvt_twitter">
										<span class="fa fa-twitter"></span>
									</a>
								</li>
								<li>
									<a href="#" class="w3pvt_dribble">
										<span class="fa fa-dribbble"></span>
									</a>
								</li>
								<li class="ml-2">
									<a href="#" class="w3pvt_google">
										<span class="fa fa-google-plus"></span>
									</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-8 footer-right">
							<div class="w3layouts-news-letter">
								<h3 class="footer-title text-uppercase text-wh mb-lg-4 mb-3">
									Newsletter
								</h3>

								<p>
									By subscribing to our mailing list you will
									always get latest news and updates from us.
								</p>
								<form
									action="#"
									method="post"
									class="w3layouts-newsletter"
								>
									<input
										type="email"
										name="Email"
										placeholder="Enter your email..."
										required=""
									/>
									<button class="btn1">
										<span
											class="fa fa-paper-plane-o"
											aria-hidden="true"
										></span>
									</button>
								</form>
							</div>
							<div class="row mt-lg-4 bottom-w3layouts-sec-nav mx-0">
								<div class="col-md-4 footer-grid_section_w3layouts">
									<h3 class="footer-title text-uppercase text-wh mb-lg-4 mb-3">
										Information
									</h3>
									<ul class="list-unstyled w3layouts-icons">
										<li>
											<a href="index.html">Home</a>
										</li>
										<li class="mt-3">
											<a href="about.html">About Us</a>
										</li>
										<li class="mt-3">
											<a href="#">Gallery</a>
										</li>
										<li class="mt-3">
											<a href="#">Services</a>
										</li>
										<li class="mt-3">
											<a href="contact.html">
												Contact Us
											</a>
										</li>
									</ul>
								</div>
								<div class="col-md-4 footer-grid_section_w3layouts">
									<div class="agileinfo_social_icons">
										<h3 class="footer-title text-uppercase text-wh mb-lg-4 mb-3">
											Customer Service
										</h3>
										<ul class="list-unstyled w3layouts-icons">
											<li>
												<a href="#">About Us</a>
											</li>
											<li class="mt-3">
												<a href="#">
													Delivery & Returns
												</a>
											</li>
											<li class="mt-3">
												<a href="#">Waranty</a>
											</li>
											<li class="mt-3">
												<a href="#">
													Terms & Condition
												</a>
											</li>
											<li class="mt-3">
												<a href="#">Privacy Plolicy</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="col-md-4 footer-grid_section_w3layouts my-md-0 my-5">
									<h3 class="footer-title text-uppercase text-wh mb-lg-4 mb-3">
										Contact Info
									</h3>
									<div class="contact-info">
										<div class="footer-address-inf">
											<h4 class="ad-info mb-2">Phone</h4>
											<p>+121 098 8907 9987</p>
										</div>
										<div class="footer-address-inf my-4">
											<h4 class="ad-info mb-2">Email </h4>
											<p>
												<a href="mailto:info@example.com">
													info@example.com
												</a>
											</p>
										</div>
										<div class="footer-address-inf">
											<h4 class="ad-info mb-2">
												Location
											</h4>
											<p>Honey Avenue, New York City</p>
										</div>
									</div>
								</div>
							</div>
							<div class="cpy-right text-left row">
								<p class="col-md-10">
									© 2019 Bootie. All rights reserved | Design
									by
									<a href="http://w3layouts.com">
										{' '}
										W3layouts.
									</a>
								</p>
								<a
									href="#home"
									class="move-top text-right col-md-2"
								>
									<span
										class="fa fa-long-arrow-up"
										aria-hidden="true"
									></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Homepage;
