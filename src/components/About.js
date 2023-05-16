import './About.css';

export default function About(about) {
    return (
        <div className="aboutWrapper section" id='about'>
            <h2>ABOUT ME</h2>
            <hr></hr>
            <h1>EMANUEL NJEGOVEC</h1>
            <p>{ about.user.summary }</p>
            <a href='https://github.com/emanuelnjegovec' target='_blank'>
                <button className="abt-button">
                    <img className='btn-image' src='/github-icon.png' alt='btn'/>
                    <div className="fill-container"></div>
                </button>
            </a>
            <a href='https://www.linkedin.com/in/emanuel-njegovec-51679b244/' target='_blank'>
                <button className="abt-button">
                    <img className='btn-image' src='/linkedin-icon.png' alt='btn'/>
                    <div className="fill-container"></div>
                </button>
            </a>
        </div>
    )
}