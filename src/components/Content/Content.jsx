import { AboutSection } from '../AboutSection/AboutSection'
import { ProjectsSection } from '../ProjectsSection/ProjectsSection'
import styles from './Content.module.css'

export const Content = ({projects}) => {
    return(
        <main className={styles.content}>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Обо мне</h2>
                <AboutSection />
            </section>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Проектные работы</h2>
                <ProjectsSection projects={projects}/>
            </section>
        </main>
    )
}