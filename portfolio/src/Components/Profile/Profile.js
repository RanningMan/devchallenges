import './Profile.css';

const Profile = ({ profileImg, name, title, content, email, phone, style }) => {
    return <div className='profile'>
        <div className={`profile__image profile__image-${style}`}><img src={profileImg} alt={name} /></div>
        <div className={`profile__details profile__details-${style}`}>
            <div className='profile__details__contacts'>
                <div className='profile__details__contacts__name'>
                    <div>{name}</div>
                    <div>{title}</div>
                </div>
                <div className='profile__details__contacts__contact'>
                    <div><span className="material-symbols-outlined">mail</span>{email}</div>
                    <div><span className="material-symbols-outlined">call</span>{phone}</div>
                </div>
            </div>
            <div className='profile__details__intro'>
                <p>{content}</p>
            </div>
        </div>
    </div>
}

export default Profile;