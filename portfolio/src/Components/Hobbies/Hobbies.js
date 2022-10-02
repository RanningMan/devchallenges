import './Hobbies.css';

const Hobbies = ({hobbies, layout}) => {
    return (
        <div className={`hobbies hobbies-${layout}`}>
            <div className='hobbies__header'>Hobbies</div>
            <div className={`hobbies__content hobbies__content-${layout}`}>
                {
                    hobbies.map(hobby => (
                        <div className='hobbies__card' key={hobby.name}>
                            <img className={`hobbies__image hobbies__image-${layout}`} src={hobby.photo} alt={hobby.name} />
                            <h3>{hobby.name}</h3>
                            <p>{hobby.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Hobbies;