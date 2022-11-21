import Image from 'next/legacy/image';
import backgroundImage from "../public/img/header-bg.jpg";
import tiger1600 from "../public/img/tiger/tiger-1600.jpeg"
import tiger1200 from "../public/img/tiger/tiger-1200.jpeg"
import tiger800 from "../public/img/tiger/tiger-800.jpeg"
import tiger400 from "../public/img/tiger/tiger-400.jpeg"

function Masthead () {
    return (

        // Need to make line 11426 in globals.css file active to show hero image with HTML (not via <Image />)
        <header className="masthead">

            {/* Tiger Image Test */}
            {/* <Image src={tiger1600} alt="..." layout='responsive' objectFit='cover' objectPosition="center"/>
            <Image src={tiger1200} alt="..." layout='responsive' objectFit='cover' objectPosition="center"/>
            <Image src={tiger800} alt="..." layout='responsive' objectFit='cover' objectPosition="center"/>
            <Image src={tiger400} alt="..." layout='responsive' objectFit='cover' objectPosition="center"/> */}
            
            {/* Hero image shown with the use of <Image /> */}
            <Image 
                src={backgroundImage}
                alt="..."
                layout='responsive'
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