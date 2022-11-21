import Image from "next/legacy/image";
import portfolioImage1 from "../public/img/portfolio/1.jpg";
import portfolioImage2 from "../public/img/portfolio/2.jpg";
import portfolioImage3 from "../public/img/portfolio/3.jpg";
import portfolioImage4 from "../public/img/portfolio/4.jpg";
import portfolioImage5 from "../public/img/portfolio/5.jpg";
import portfolioImage6 from "../public/img/portfolio/6.jpg";

function PortfolioGrid () {
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* Portfolio item 1 */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>

                                <img className="img-fluid" src="img/portfolio/1.jpg" alt="..." />

                                {/* <picture>
                                    <source media="(max-width: 767px)" srcSet="img/portfolio/1-w246.jpg" />
                                    <source media="(min-width: 768px)" srcSet="img/portfolio/1.jpg" />
                                    <img src="img/portfolio/1.jpg" alt="..." className="img-fluid" />
                                </picture> */}

                                {/* <Image src={portfolioImage1} alt="..." layout='responsive' className="img-fluid" /> */}

                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Threads</div>
                                <div className="portfolio-caption-subheading text-muted">Illustration</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* Portfolio item 2 */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>

                                <img className="img-fluid" src="img/portfolio/2.jpg" alt="..." />

                                {/* <picture>
                                    <source media="(max-width: 767px)" srcSet="img/portfolio/2-w246.jpg" />
                                    <source media="(min-width: 768px)" srcSet="img/portfolio/2.jpg" />
                                    <img src="img/portfolio/2.jpg" alt="..." className="img-fluid" />
                                </picture> */}

                                {/* <Image src={portfolioImage2} alt="..." layout='responsive' className="img-fluid" /> */}
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Explore</div>
                                <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* Portfolio item 3 */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>

                                <img className="img-fluid" src="img/portfolio/3.jpg" alt="..." />
                                
                                {/* <picture>
                                    <source media="(max-width: 767px)" srcSet="img/portfolio/3-w246.jpg" />
                                    <source media="(min-width: 768px)" srcSet="img/portfolio/3.jpg" />
                                    <img src="img/portfolio/3.jpg" alt="..." className="img-fluid" />
                                </picture> */}

                                {/* <Image src={portfolioImage3} alt="..." layout='responsive' className="img-fluid" /> */}
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Finish</div>
                                <div className="portfolio-caption-subheading text-muted">Identity</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        {/* Portfolio item 4 */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>

                                <img className="img-fluid" src="img/portfolio/4.jpg" alt="..." />

                                {/* <picture>
                                    <source media="(max-width: 767px)" srcSet="img/portfolio/4-w246.jpg" />
                                    <source media="(min-width: 768px)" srcSet="img/portfolio/4.jpg" />
                                    <img src="img/portfolio/4.jpg" alt="..." className="img-fluid" />
                                </picture> */}

                                {/* <Image src={portfolioImage4} alt="..." layout='responsive' className="img-fluid" /> */}
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Lines</div>
                                <div className="portfolio-caption-subheading text-muted">Branding</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        {/* Portfolio item 5 */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>

                                <img className="img-fluid" src="img/portfolio/5.jpg" alt="..." />

                                {/* <picture>
                                    <source media="(max-width: 767px)" srcSet="img/portfolio/5-w246.jpg" />
                                    <source media="(min-width: 768px)" srcSet="img/portfolio/5.jpg" />
                                    <img src="img/portfolio/5.jpg" alt="..." className="img-fluid" />
                                </picture> */}

                                {/* <Image src={portfolioImage5} alt="..." layout='responsive' className="img-fluid" /> */}
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Southwest</div>
                                <div className="portfolio-caption-subheading text-muted">Website Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        {/* Portfolio item 6 */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>

                                <img className="img-fluid" src="img/portfolio/6.jpg" alt="..." />
                                
                                {/* <picture>
                                    <source media="(max-width: 767px)" srcSet="img/portfolio/6-w246.jpg" />
                                    <source media="(min-width: 768px)" srcSet="img/portfolio/6.jpg" />
                                    <img src="img/portfolio/6.jpg" alt="..." className="img-fluid" />
                                </picture> */}

                                {/* <Image src={portfolioImage6} alt="..." layout='responsive' className="img-fluid" /> */}
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Window</div>
                                <div className="portfolio-caption-subheading text-muted">Photography</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PortfolioGrid;