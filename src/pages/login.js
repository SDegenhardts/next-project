import styles from '@/styles/login/Login.module.css'

export default function Login() {
  return (
    <section className={styles.container}>
      <div>
        <input placeholder='Username or Email'></input>
        <input placeholder='Password'></input>
        <button><a href='/'>To Start</a></button>
      </div>
    </section>
  )
}
