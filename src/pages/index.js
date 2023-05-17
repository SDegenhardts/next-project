import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.fundo}>
        <div className={styles.buttonhome}>
          <button><a href='/login'>Login</a></button>
        </div>
        <div className={styles.fonthome}>
          <h1 className={styles.font}>
            WELCOME STRANGER
          </h1>
        </div>
        <div className={styles.fonthome2}>
          <h2>
          ERA UMA VEZ UM MENINO QUE TINHA 15 ANOS, ELE QUERIA VIVER UMA AVENTURA NA FLORESTA ASSOMBRADA, MAS ELE NUNCA PODE VIVER UMA AVENTURA, ENTÃO ELE RESOLVEU VIVER UMA AVENTURA NA FLORESTA ASSOMBRADA.
          </h2>
          </div>
          <div>
            
          </div>
      </div>
    </section>
  )
}
