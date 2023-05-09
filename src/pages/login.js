import styles from '@/styles/login/Login.module.css'

export default function Login() {
  return (
    <section className={styles.container}>
      <div>
        <input placeholder='Nome'></input>
        <input placeholder='Email'></input>
        <input placeholder='Senha'></input>
        <button><a href='/'>Voltar</a></button>
      </div>
    </section>
  )
}
