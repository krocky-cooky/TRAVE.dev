import Logo from '../public/images/logo.svg';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const NavButton = (props :{
    text: string
}) => {
    return (
        <li className={styles.navli}>
            {props.text}
        </li>
    )
}


export const Header = (props: {

}) => {
    return (
        <header
            className={styles.header_wrap}>
                <div className={styles.header}>
                    <Link href="/">
                        <Logo className={styles.logo} />
                    </Link>
                    <div className={styles.nav}>
                        <ul className={styles.navul}>
                            {/* <NavButton
                                text={"What's TRAVE"} />
                            <NavButton
                                text={"SetUps"} />
                            <NavButton 
                                text={"Contact"} /> */}
                        </ul>
                    </div>
                </div>
        </header>
    )
} 

export default Header;

