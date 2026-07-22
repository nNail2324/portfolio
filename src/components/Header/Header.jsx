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
                    <svg width="30" height="6" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3H30" stroke="#1E1E1E" stroke-width="6"/>
                    </svg>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27 3H30V27H27V30H3V27H0V3H3V0H27V3ZM6 24H24V6H6V24Z" fill="#1E1E1E"/>
                    </svg>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 29.75V21.25H4.25V17H8.5V12.75H4.25V8.5H0V0H8.5V8.5H12.75V12.75H17V8.5H21.25V0H29.75V8.5H25.5V12.75H21.25V17H25.5V21.25H29.75V29.75H21.25V21.25H17V17H12.75V21.25H8.5V29.75H0Z" fill="#1E1E1E"/>
                    </svg>
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