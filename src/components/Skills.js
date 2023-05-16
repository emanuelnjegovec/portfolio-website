import './Skills.css';
import SkillCard from './SkillCard';

export default function Skills(skills) {
    const prog_lang = skills.user.filter(el => 
        el.keywords[0] === 'programming language'
    );
    const other_lang = skills.user.filter(el => 
        el.keywords[0] === 'other languages'
    );
    const lib_frame = skills.user.filter(el => 
        el.keywords[0] === 'libraries/frameworks'
    );
    const database = skills.user.filter(el => 
        el.keywords[0] === 'database'
    );

    console.log(prog_lang);
    console.log(other_lang);

    return (
        <div className="skills-wrapper section" id='skills'>
            <h2>SKILLS</h2>
            <hr></hr>
            <div className='programming-languages'>
                <h3>Programming languages:</h3>
                <div className='inner-skills-wrapper'>
                    { prog_lang.map(skill => SkillCard(skill))}
                </div>
            </div>
            <div className='other-languages'>
                <h3>Other languages:</h3>
                <div className='inner-skills-wrapper'>
                    { other_lang.map(skill => SkillCard(skill))}
                </div>
            </div> 
            <div className='libraries-framworks'>
                <h3>Libraries and frameworks:</h3>
                <div className='inner-skills-wrapper'>
                    { lib_frame.map(skill => SkillCard(skill))}
                </div>
            </div>
            <div className='database'>
                <h3>Databases:</h3>
                <div className='inner-skills-wrapper'>
                    { database.map(skill => SkillCard(skill))}
                </div>
            </div>         
        </div>
    )
}