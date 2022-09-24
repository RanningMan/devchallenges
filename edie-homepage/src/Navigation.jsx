import { useState, useEffect } from 'react';
import './Navigation.css';

const useIsDesktop = () => {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
	useEffect(() => {
		const updateIsDesktop = () => {
			setIsDesktop(window.innerWidth >= 768);
		};
		window.addEventListener('resize', updateIsDesktop);
		return () => {
			window.removeEventListener('resize', updateIsDesktop);
		};
	});
	return isDesktop;
};

const NavList = ({ links, vertical }) => {
	return (
		<ul
			className={`nav__list ${
				vertical ? 'nav__list-vertical' : 'nav__list-horizonal'
			}`}
		>
			{links.map((link) => (
				<li className='nav__list__item'>
					<a href={link.href}>{link.name}</a>
				</li>
			))}
		</ul>
	);
};

const Hamburger = ({ onClick, cross }) => (
	<div
		className={`hamburger ${cross ? 'hamburger-cross' : ''}`}
		onClick={onClick}
	>
		<hr />
		<hr />
		<hr />
	</div>
);

const NavHamburger = ({ links }) => {
	const [expand, setExpand] = useState(false);
	const toggle = () => setExpand((oldExpand) => !oldExpand);
	return (
		<div className='mobile_nav'>
			{expand ? (
				<>
					<Hamburger onClick={toggle} cross />
					<NavList links={links} vertical></NavList>
				</>
			) : (
				<Hamburger onClick={toggle} />
			)}
		</div>
	);
};

const Navigation = ({ links }) => {
	const isDesktop = useIsDesktop();
	return (
        <>
            {
            isDesktop ? (
                <NavList links={links} />
            ) : (
                <NavHamburger links={links} />
            )
            }
        </>
    )
};

export default Navigation;
