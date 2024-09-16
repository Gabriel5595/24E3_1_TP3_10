import styles from "./post.module.css";

export default function Post() {
    return(
        <div className={styles.postContainer}>

            <div className={styles.postHeader}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s" alt="Profile image placeholder" />
                <p>Zé Ninguém</p>
            </div>

            <div className={styles.postContent}>
                <div className={styles.postImgContainer}>
                    <img src="https://cdn.outsideonline.com/wp-content/uploads/2020/11/19/cyclist-lens-flare_s.jpg" alt="Bike ride" />
                </div>

                <div className={styles.postContentText}>
                    <h5>Meu post</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repellat quibusdam laborum voluptas deserunt magni cum modi rerum non dolor quas enim nulla hic aperiam! Nemo perferendis eius aliquid labore!</p>
                </div>
            </div>

            <div className={styles.postInteractions}>
                <div className={styles.postLikes}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1175/1175578.png" alt="Like" />
                    <p>8</p>
                </div>

                <p>|</p>

                <div className={styles.postShares}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1358/1358023.png" alt="Share" />
                    <p>3</p>
                </div>
            </div>

        </div>
    )
}