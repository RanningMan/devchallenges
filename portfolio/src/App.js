import { useEffect, useState } from 'react';
import './App.css';
import Hobbies from './Components/Hobbies/Hobbies';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import ProfilePhoto from './profilePhoto.png';
import RecipePhoto from './recipe.png';

const profile = {
	name: 'Billy Pearson',
	title: 'Front-end developer',
	email: 'billy@example.com',
	phone: '(+86) 139 8888 8888',
	content:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	profileImg: ProfilePhoto,
};

const skills = {
	skillCategory: 'front end',
	skills: [
		{
			name: 'React',
			grade: 6,
		},
		{
			name: 'Javascript',
			grade: 8,
		},
		{
			name: 'CSS',
			grade: 9,
		},
		{
			name: 'Vue',
			grade: 6,
		},
		{
			name: 'Redux',
			grade: 8,
		},
		{
			name: 'React Native',
			grade: 9,
		},
	],
};

const projects = [
	{
		projectImg: RecipePhoto,
		name: 'Recipe Blog',
		tags: ['html', 'css', 'responsive'],
		content:
			'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
		demoLink: "https://devchallenge-recipe-page.web.app/",
		codeLink: 'https://github.com/RanningMan/devchallenges/tree/main/recipe-page',
	},
	{
		projectImg: RecipePhoto,
		name: 'My Gallery',
		tags: ['html', 'css', 'React'],
		content:
			'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
		demoLink: "https://devchallenge-recipe-page.web.app/",
		codeLink: 'https://github.com/RanningMan/devchallenges/tree/main/recipe-page',
	},
	{
		projectImg: RecipePhoto,
		name: 'Recipe Blog1',
		tags: ['html', 'css', 'Vue'],
		content:
			'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
		demoLink: "https://devchallenge-recipe-page.web.app/",
		codeLink: 'https://github.com/RanningMan/devchallenges/tree/main/recipe-page',
	},
	{
		projectImg: RecipePhoto,
		name: 'Recipe Blog2',
		tags: ['html', 'css', 'responsive'],
		content:
			'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
		demoLink: "https://devchallenge-recipe-page.web.app/",
		codeLink: 'https://github.com/RanningMan/devchallenges/tree/main/recipe-page',
	},
	{
		projectImg: RecipePhoto,
		name: 'Recipe Blog3',
		tags: ['html', 'css', 'responsive'],
		content:
			'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
		demoLink: "https://devchallenge-recipe-page.web.app/",
		codeLink: 'https://github.com/RanningMan/devchallenges/tree/main/recipe-page',
	},
	{
		projectImg: RecipePhoto,
		name: 'Recipe Blog4',
		tags: ['html', 'css', 'responsive', 'React'],
		content:
			'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
		demoLink: "https://devchallenge-recipe-page.web.app/",
		codeLink: 'https://github.com/RanningMan/devchallenges/tree/main/recipe-page',
	},
];

const hobbies = [
	{
		name: 'Gaming',
		photo: ProfilePhoto,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		name: 'Cooking',
		photo: ProfilePhoto,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		name: 'Biking',
		photo: ProfilePhoto,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}
];

const useIsDesktop = () => {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
	useEffect(() => {
		const resizeFunc = () => {
			setIsDesktop(window.innerWidth >= 768);
		};
		window.addEventListener('resize', resizeFunc);
		return () => {
			window.removeEventListener('resize', resizeFunc);
		};
	});
	return isDesktop;
};

function App() {
	const isDesktop = useIsDesktop();
	return (
		<div className='App'>
			<Profile
				profileImg={profile.profileImg}
				name={profile.name}
				title={profile.title}
				email={profile.email}
				phone={profile.phone}
				content={profile.content}
				style={isDesktop ? 'horizontal' : 'vertical'}
			/>
			<Skills
				skillCategory={skills.skillCategory}
				skills={skills.skills}
			/>
			<Projects projects={projects} layout={isDesktop ? 'horizontal' : 'vertical'} />
			<Hobbies hobbies={hobbies} layout={isDesktop ? 'horizontal' : 'vertical'} />
		</div>
	);
}

export default App;
