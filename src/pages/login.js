import styles from '@/styles/login/Login.module.css'

export default function Login() {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.font}>
          SIGN IN
        </h1>
        <input placeholder='Username or Email'></input>
        <input placeholder='Password'></input>
        <button><a href='/'>To Start</a></button>
      </div>
    </section>
  )
}
