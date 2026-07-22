import styles from './AboutSection.module.css'

export const AboutSection = () => {
    return(
        <div className={styles.description}>
            <p>.Личные данные <span className={styles.quotes}>&#123;</span><br />
                <span className={styles.naming}>  ФИО:</span> <span className={styles.values}>Шарипов Наиль Ирекович</span><br />
                <span className={styles.naming}>  Дата Рождения:</span> <span className={styles.values}>30.09.2003</span><br />
                <span className={styles.quotes}>&#125;</span><br /><br />

                .Образование <span className={styles.quotes}>&#123;</span><br />
                <span className={styles.naming}>  Университет:</span> <span className={styles.values}>УГНТУ</span><br />
                <span className={styles.naming}>  Специализация:</span> <span className={styles.values}>Программное обеспечение средств вычислительной техники и автоматизированных систем</span><br />
                <span className={styles.naming}>  Курсы:</span> <span className={styles.values}>Фронтенд-разработчик от Яндекс Практикум</span><br />
                <span className={styles.quotes}>&#125;</span>
            </p>
        </div>
    )
}