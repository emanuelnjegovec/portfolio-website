import './Skills.css';
import SkillCard from './SkillCard';

export default function Skills(skills) {
    console.log(skills);
    return (
        <div className="skills-wrapper" id='skills'>
            <h2>SKILLS</h2>
            <hr></hr>
            <div className='inner-skills-wrapper'>
                { skills.user.map(skill => SkillCard(skill))}
            </div>
        </div>
    )
}