import Aside from "../../components/Aside"
import Header from "../../components/Header"
import Painel from "../../components/Painel"
import styles from "./home.module.css"

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Header />
            <Aside />
            <Painel />
        </div>
    )
}