import './ProjectCard.css'


export default function ProjectCard(project) {
    console.log(project);
    const url = project.images[0] ? project.images[0].resolutions.desktop.url : 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1';
    const github_url = project.githubUrl
    return (
        <div className='project-container'>
            <img src={url} alt='project-image'/>
            <h3>{project.name}</h3>
            <div className='project-card-btns'>
                <a href={github_url} target='_blank'>
                    <button className="button">
                        <img className='btn-image' src='/github-icon.png'/>
                        <div className="fill-container"></div>
                    </button>
                </a>
                <button className="button">
                    <img className='btn-image' src='/link-icon.png'/>
                    <div className="fill-container"></div>
                </button>
            </div>
        </div>
    )
}