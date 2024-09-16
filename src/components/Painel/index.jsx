import styles from "./painel.module.css";

import Post from "../Post"

export default function Painel() {
    return (
        <div className={styles.painelContainer}>
            <h1>Painel</h1>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}