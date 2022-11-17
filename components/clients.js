import Image from "next/legacy/image";
import clientImageMicrosoft from "../public/img/logos/microsoft.svg";
import clientImageGoogle from "../public/img/logos/google.svg";
import clientImageFacebook from "../public/img/logos/facebook.svg";
import clientImageIbm from "../public/img/logos/ibm.svg";


function Clients () {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img className="img-fluid img-brand d-block mx-auto" src="img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" />
                            {/* <Image src={clientImageMicrosoft} alt="..." layout='responsive' className="img-fluid img-brand d-block mx-auto"/> */}
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img className="img-fluid img-brand d-block mx-auto" src="img/logos/google.svg" alt="..." aria-label="Google Logo" />
                            {/* <Image src={clientImageGoogle} alt="..." layout='responsive' className="img-fluid img-brand d-block mx-auto"/> */}
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img className="img-fluid img-brand d-block mx-auto" src="img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" />
                            {/* <Image src={clientImageFacebook} alt="..." layout='responsive' className="img-fluid img-brand d-block mx-auto"/> */}
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img className="img-fluid img-brand d-block mx-auto" src="img/logos/ibm.svg" alt="..." aria-label="IBM Logo" />
                            {/* <Image src={clientImageIbm} alt="..." layout='responsive' className="img-fluid img-brand d-block mx-auto"/> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Clients;