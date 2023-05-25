import styles from '@/styles/Home.module.css'
import {RiSearchLine} from 'react-icons/ri'

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.fundo}>
        <div className={styles.menu}>
          <div className={styles.icon}>
            <RiSearchLine/>
            <input className={styles.busca} placeholder="    Search">
            </input>
          </div>
          <button className={styles.add}>
            + New User
          </button>
          <button><a href='/'>LOGOUT</a></button>
        </div>

        <div className={styles.box}>

          <div className={styles.fonthome}>
            <h1 className={styles.font}>
              BEM VINDO AO SEU LOGIN
            </h1>
          </div>

          <div className={styles.fonthome2}>
            <h2>
              devido as atuais circustancias isto é apenas um teste, obrigada pela sua atenção
            </h2>
          </div>

          <div>

          </div>
        </div>
      </div>
    </section>
  )
}
