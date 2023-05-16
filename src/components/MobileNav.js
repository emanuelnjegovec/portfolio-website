import './MobileNav.css'

export default function MobileNav() {
    return (
        <div className='mobile-header'>
            <img src="/placeholder_large.png" alt="profile"/>
            <ul className='mobile-nav'>
                <li className='about active'><a href='#about'>ABOUT</a></li>
                <li className='projects'><a href='#projects'>PROJECTS</a></li>
                <li className='skills'><a href='#skills'>SKILLS</a></li>
                <li className='contact'><a href='#contact'>CONTACT</a></li>
            </ul>
        </div>
    )
}