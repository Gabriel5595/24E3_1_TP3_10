import styles from "./header.module.css";

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            
            <div className={styles.tileContainer}>
                <h1>FakeBook</h1>
            </div>

            <div className={styles.menuContainer}>
                <ul className={styles.navbar}>
                    <li className={styles.navItem}><a>Início</a></li>
                    <li className={styles.navItem}><a>Amigos</a></li>
                    <li className={styles.navItem}><a>Mensagens</a></li>
                    <li className={styles.navItem}><a>Fotos</a></li>
                </ul>
            </div>
        </div>
    )
}