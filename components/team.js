import Image from "next/legacy/image";
import teamImage1 from "../public/img/team/1.jpg";
import teamImage2 from "../public/img/team/2.jpg";
import teamImage3 from "../public/img/team/3.jpg";

function Team () {
    return (
        <section className="page-section bg-light" id="team">


            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            {/* <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="..." style={{width:"14rem", height: "14rem"}}/> */}
                            <Image src={teamImage1} alt="..." layout='responsive' className="mx-auto rounded-circle" width="224px" height="224px"/>

                            <h4>Parveen Anand</h4>
                            <p className="text-muted">Lead Designer</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            {/* <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt="..." /> */}
                            <Image src={teamImage2} alt="..." layout='responsive' className="mx-auto rounded-circle" width="224px" height="224px"/>
                            <h4>Diana Petersen</h4>
                            <p className="text-muted">Lead Marketer</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            {/* <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt="..." /> */}
                            <Image src={teamImage3} alt="..." layout='responsive' className="mx-auto rounded-circle" width="224px" height="224px"/>
                            <h4>Larry Parker</h4>
                            <p className="text-muted">Lead Developer</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    )
};

export default Team;