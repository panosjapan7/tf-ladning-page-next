import Image from 'next/legacy/image';
import aboutPhoto1 from "../public/img/about/1.jpg"
import aboutPhoto2 from "../public/img/about/2.jpg"
import aboutPhoto3 from "../public/img/about/3.jpg"
import aboutPhoto4 from "../public/img/about/4.jpg"

function About () {
    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image">
                            {/* <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="..." /> */}
                            <Image 
                                className="rounded-circle img-fluid" 
                                src={aboutPhoto1} 
                                alt="..." 
                                layout="responsive"
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            {/* <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="..." /> */}
                            <Image 
                                className="rounded-circle img-fluid" 
                                src={aboutPhoto2} 
                                alt="..." 
                                layout="responsive"
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image">
                            {/* <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="..." /> */}
                            <Image 
                                className="rounded-circle img-fluid" 
                                src={aboutPhoto3} 
                                alt="..." 
                                layout="responsive"
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2015</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            {/* <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="..." /> */}
                            <Image 
                                className="rounded-circle img-fluid" 
                                src={aboutPhoto4} 
                                alt="..." 
                                layout="responsive"
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2020</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default About;