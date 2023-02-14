import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Twitter from '../public/images/twitter.svg';


const Footer = () => {
    return (
        <footer className={styles.footerwrap}>
            <div className={styles.footer_background}>
            <div className={styles.footer}>
                <div>
                    © TRAVE, 2023
                </div>
                <div>
                    <Link href="/">
                    <Twitter className={styles.twitter} />
                    </Link>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer