import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ projects, layout }) => {
	const availableTags = [
		'All',
		...projects.reduce((prev, curr) => {
			curr.tags.forEach((tag) => prev.add(tag));
			return prev;
		}, new Set()),
	];
	const [selectedTag, setSelectedTag] = useState('All');
	const [currentPage, setCurrentPage] = useState(1);
	const [numberOfProjects, setNumberOfProjects] = useState(projects.length);
	const [numberOfPages, setNumberOfPages] = useState(
		Math.ceil(projects.length / 3)
	);
	const [filteredProjects, setFilteredProjects] = useState(projects);
	const onTagSelect = (tag) => {
		setSelectedTag(tag);
	};
	const onPageSelect = (page) => {
		setCurrentPage(page);
	};
	useEffect(() => {
		const filtered = projects.filter(
			(project) =>
				selectedTag === 'All' || project.tags.includes(selectedTag)
		);
		setNumberOfProjects(filtered.length);
		setNumberOfPages(Math.ceil(filtered.length / 3));
		setFilteredProjects(filtered);
		return () => {
			setFilteredProjects(projects);
			setNumberOfPages(Math.ceil(projects.length / 3));
			setNumberOfProjects(projects.length);
		};
	}, [selectedTag, projects]);
	return (
		<div className={`projects`}>
			<div className='projects__header'>
				<h2>{`Projects (${numberOfProjects})`}</h2>
				{availableTags.map((tag) => (
					<button
						key={tag}
						className={`projects__header__tagSelector ${
							selectedTag === tag
								? 'projects__header__tagSelector-selected'
								: ''
						}`}
						onClick={() => onTagSelect(tag)}
					>
						{tag}
					</button>
				))}
			</div>
			<div className={`projects__content projects__content-${layout}`}>
				{filteredProjects
					.map((project) => (
						<ProjectCard
							key={project.name}
							projectImg={project.projectImg}
							name={project.name}
							tags={project.tags}
							content={project.content}
							demoLink={project.demoLink}
							codeLink={project.codeLink}
							style={layout}
						/>
					))
					.slice((currentPage - 1) * 3, currentPage * 3)}
			</div>
			<div className='projects__footer'>
				<div
					className='projects__footer__pageButton'
					onClick={() => {
						onPageSelect(Math.max(1, currentPage - 1));
					}}
				>
					{'<'}
				</div>
				{new Array(numberOfPages).fill(0).map((_, idx) => (
					<div
						key={idx + 1}
						className={`projects__footer__pageButton ${
							currentPage === idx + 1
								? 'projects__footer__pageButton-selected'
								: ''
						}`}
						onClick={() => {
							onPageSelect(idx + 1);
						}}
					>
						{idx + 1}
					</div>
				))}
				<div
					className='projects__footer__pageButton'
					onClick={() => {
						onPageSelect(Math.min(numberOfPages, currentPage + 1));
					}}
				>
					{'>'}
				</div>
			</div>
		</div>
	);
};

export default Projects;
