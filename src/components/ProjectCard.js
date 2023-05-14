import './ProjectCard.css'


export default function ProjectCard(project) {
    const url = project.images[0] ? project.images[0].resolutions.desktop.url : 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1';
    return (
        <div className='project-container'>
            <img src={url} alt='project-image'/>
            <h3>{project.name}</h3>
        </div>
    )
}