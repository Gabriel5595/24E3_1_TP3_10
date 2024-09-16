import styles from "./friendCard.module.css";

export default function FriendCard() {
    return (
        <div className={styles.friendCardContainer}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s" alt="Profile image placeholder" />
            <p>Zé Ninguém</p>
        </div>
    )
}