import { useEffect, useState } from "react";
import './Navigation.css';

const NavBar = () => {
    const [selected, setSelected] = useState(0);
    const onClick = (idx) => setSelected(idx);
    const list = ['home', 'collection', 'about', 'contact'].map((content, idx) => {
        if(idx === selected) {
            return <li className="selected" onClick={() => {onClick(idx)}}>{content}</li>;
        } else {
            return <li onClick={() => {onClick(idx)}}>{content}</li>;
        }
    })
    return (
        <ul>
            {list}
        </ul>
    );
};

const Cross = ({ onClick }) => <div onClick={onClick} className="cross">X</div>;

const Hamburger = () => {
    const [expand, setExpand] = useState(false);
    const toggle = () => setExpand(oldVal => !oldVal);
    return (
        expand ? <><Cross onClick={toggle} /><NavBar /></> :
        <div className="hamburger" onClick={toggle}>
            <hr />
            <hr />
            <hr />
        </div>
    )
}

const Navigation = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    useEffect(() => {
        const updateIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener('resize', updateIsDesktop);
        return () => window.removeEventListener('resize', updateIsDesktop);
    });
    return <div className="nav">{isDesktop ? <NavBar /> : <Hamburger />}</div>;
}

export default Navigation;