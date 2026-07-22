import { useEffect, useRef } from 'react';
import styles from './Header.module.css' 

export const Header = () => {
    const textRef = useRef(null);

    useEffect(() => {
    const textReplacement = () => {
        const text = textRef.current;
        if (!text) return;

        if (window.innerWidth <= 768) {
            text.textContent = '>...\n  >sharipov_nail\n    >projects';
        } else {
            text.textContent = '/sharipov_nail/projects';
        }
    };

    textReplacement();

    window.addEventListener('resize', textReplacement);

    return () => {
        window.removeEventListener('resize', textReplacement);
    };
    }, []);

    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className={styles.logoTitle}>portfolio</h1>
                <div className={styles.logoDecoratedZone}>
                    <img aria-hidden="true" src="../../src/assets/decorImage/collapse.svg" />
                    <img aria-hidden="true" src="../../src/assets/decorImage/restore.svg" />
                    <img aria-hidden="true" src="../../src/assets/decorImage/close.svg" />
                </div>
            </div>
            <h2 className={styles.subtitle} ref={textRef}>/sharipov_nail/projects</h2>
            <div className={styles.description}>
                <p>портфолио</p>
                <p>fronted-</p>
                <p>разработчика</p>
            </div>
        </header>
    );
}