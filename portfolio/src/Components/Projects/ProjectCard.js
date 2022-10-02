import './ProjectCard.css';

const ProjectCard = ({ projectImg, name, tags, content, demoLink, codeLink, style }) => {
    return (
        <div className={`project project-${style}`}>
            <div className={`project__image project__image-${style}`}><img src={projectImg} alt={name} /></div>
            <div className={`project__description project__description-${style}`}>
                <div className='project__description__tags'>
                    {
                        tags.map(tag => <span key={tag}>#{tag}</span>)
                    }
                </div>
                <h2 className='project__description__name'>{name}</h2>
                <p>{content}</p>
                <div className='project__description__links'>
                    <a className='project__description__link' href={demoLink}>Demo</a>
                    <a className='project__description__link' href={codeLink}>Code</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;