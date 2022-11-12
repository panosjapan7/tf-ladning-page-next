import Image from 'next/legacy/image';
import backgroundImage from "../public/img/header-bg.jpg";

function Masthead () {
    return (

        <header className="masthead">
            <Image 
                src={backgroundImage}
                alt="..."
                layout='fill'
                objectFit='cover'
                objectPosition="center"
            />
            <div className="container">
                <div className="masthead-subheading">Welcome To Our Studio!</div>
                <div className="masthead-heading text-uppercase">{"It's Nice To Meet You"}</div>
                <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>

    )
};

export default Masthead;