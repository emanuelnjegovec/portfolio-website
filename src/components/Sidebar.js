import './Sidebar.css';
import { useEffect } from 'react';


export default function Sidebar() {
    const sections = document.querySelectorAll('.section');
    const navLi = document.querySelectorAll('li');

    useEffect(() => {
        const onScroll = () => {
            let current = '';
            sections.forEach( section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if(window.scrollY >= (sectionTop - sectionHeight / 2)){
                    current = section.getAttribute('id');
                }
            })

            navLi.forEach( li => {
                li.classList.remove('active');
                if (li.classList.contains(current)) {
                    li.classList.add('active');
                }
            })
        }

        window.addEventListener('scroll', onScroll);

        return() => {
            window.removeEventListener('scroll', onScroll);
        }
    });

    return (
        <div className='sidebar'>
            <img src="/placeholder_large.png" alt="profile"/>
            <ul className='desktop-nav'>
                <li className='about active'><a href='#about'>ABOUT</a></li>
                <li className='projects'><a href='#projects'>PROJECTS</a></li>
                <li className='skills'><a href='#skills'>SKILLS</a></li>
                <li className='contact'><a href='#contact'>CONTACT</a></li>
            </ul>
        </div>
    )
}