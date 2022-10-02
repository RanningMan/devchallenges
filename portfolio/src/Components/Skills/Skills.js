import './Skills.css';

const Bar = ({ length, layout }) => {
	return (
		<div className='bar'>
			<div className={`bar bar__colorPart bar__colorPart-${length}`}></div>
		</div>
	);
};

const Skills = ({ skillCategory, skills }) => {
	return (
		<div className='skills'>
			<h1 className='skills__header'>{skillCategory}</h1>
            <div className='skills__content'>
                {skills.map((skill) => (
                    <div key={skill.name} className='skills__skill'>
                        <div>{skill.name}</div>
                        <Bar length={skill.grade} />
                    </div>
                ))}
            </div>
		</div>
	);
};

export default Skills;
