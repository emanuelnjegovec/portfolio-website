import './Sidebar.css';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <img src="/placeholder_large.png" alt="profile"/>
            <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    )
}