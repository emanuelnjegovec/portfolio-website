import './About.css';

export default function About(about) {
    return (
        <div className="aboutWrapper section" id='about'>
            <h2>ABOUT ME</h2>
            <hr></hr>
            <h1>EMANUEL NJEGOVEC</h1>
            <p>{ about.user.summary }</p>
        </div>
    )
}