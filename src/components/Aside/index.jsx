import FriendCard from "../FriendCard";
import styles from "./aside.module.css";

export default function Aside() {
    return (
        <div className={styles.asideContainer}>
            <h1>Friends</h1>
            <div className={styles.asideFriends}>
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
            </div>

            <h1>Suggestions</h1>
            <div className={styles.asideSuggestions}>
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
            </div>
        </div>
    )
}