import styles from './Footer.module.css'

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <h2 className={styles.logoTitle}>portfolio</h2>
                <svg className={styles.logoImage} width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_56_128)">
                        <path className={styles.star} d="M4.56668 4.56689H6.85001V25.1169H4.56668V4.56689Z" fill="white"/>
                        <path className={styles.star} d="M2.28333 9.1333H9.13333V20.55H2.28333V9.1333Z" fill="white"/>
                        <path className={styles.star} d="M0 13.7002H11.4167V15.9835H0V13.7002Z" fill="white"/>
                        <path className={styles.littleStar} d="M15.9833 0H18.2667V11.4167H15.9833V0Z" fill="white"/> 
                        <path className={styles.littleStar} d="M13.7 4.56689H20.55V6.85023H13.7V4.56689Z" fill="white"/>
                        <path d="M15.9833 18.2666H18.2667V34.2499H15.9833V18.2666Z" fill="white"/>
                        <path d="M13.7 22.8335H20.55V29.6835H13.7V22.8335Z" fill="white"/>
                        <path d="M11.4167 25.1167H22.8333V27.4H11.4167V25.1167Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_56_128">
                            <rect width="22.8333" height="34.25" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <ul className={styles.socialList}>
                <li className={styles.socialListItem}>
                    <a className={styles.socialLink} href="https://github.com/nNail2324">
                        <img className={styles.socialLinkIcon} src="../../src/assets/decorImage/github.svg" alt="" />
                        <p className={styles.socialLinkText} >github</p>
                    </a>
                </li>
                <li className={styles.socialListItem}>
                    <a className={styles.socialLink} href="https://t.me/ok_topuss">
                        <img className={styles.socialLinkIcon} src="../../src/assets/decorImage/telegram.svg" alt="" />
                        <p className={styles.socialLinkText}>telegram</p>
                    </a>
                </li>
            </ul>
        </footer>
    )
}