import './SkillCard.css'

export default function SkillCard(skill) {
    const url = skill.keywords[1]; 
    return (
        <div className='skill-container'>
            <img src={url} alt='skill-image'/>
            <h4>{ skill.name }</h4>
            <div>
                
            </div>
        </div>
    )
}