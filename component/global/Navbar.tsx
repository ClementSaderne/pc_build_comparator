import Image from "next/image";
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav id={styles.navBar}>
                <div id={styles.navImgDiv}>
                    <Image
                        src="/images/logo.ico"
                        width={0}
                        height={0}
                        alt="Configurator 9000 !"
                    />
                </div>
                <div id={styles.navListDiv}>
                    <ol id={styles.navList}>
                        <li className={styles.navItem}>Acceuil</li>
                        <li className={styles.navItem}>Configurateur</li>
                        <li className={styles.navItem}>Composants</li>
                    </ol>
                </div>
                <div id={styles.navAccountDiv}>
                    connexion
                </div>
        </nav>
    );
}