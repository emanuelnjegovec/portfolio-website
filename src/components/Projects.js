import ProjectCard from './ProjectCard';
import './Projects.css'

export default function Projects(projects) {
    return (
        <div className="projects-wrapper" id='projects'>
            <h2>PROJECTS</h2>
            <hr></hr>
            <div className='inner-projects-wrapper'>
                { projects.user.map(project => ProjectCard(project))}
            </div>
        </div>
    )
}