import { Project } from '../Project/Project'
import styles from './ProjectsSection.module.css'

export const ProjectsSection = ({projects}) => {
    return(
        <ul className={styles.projectsList}>
            {
                projects.map((project, index) => (
                    <Project key={index} imagePath={project.imagePath} title={project.title} stack={project.stack} link={project.link} />
                ))
            }
        </ul>
    )
}