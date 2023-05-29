import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.fundo}>
        <div className={styles.menu}>
          <button><a href='/login'>LOGIN</a></button>
        </div>
        <div className={styles.boxhome}>
        <div className={styles.fonthome}>
          <h1 className={styles.font}>
            WELCOME STRANGER
          </h1>
        </div>
        <div className={styles.fonthome2}>
          <h2>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
          </h2>
          </div>
          <div>
            </div>
          </div>
      </div>
    </section>
  )
}
