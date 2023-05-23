import styles from '@/styles/login/Login.module.css'

import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter()
  let users = [
    {
      username: 'Santhiago Degenhardt',
      email:"santhiago.dg@hotmail.com",
      password: "senhaforte1",
    }
  ]
  function signIn(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let user = users.find(i => i.email === email  &&  i.password === password)
    if (user) {
      router.push('/utilitario');
    }
    //console.log(user)
    if (!user) alert ("Usuario ou senha incorretos")
  }
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.font}>
          SIGN IN
        </h1>
        <input id="email" placeholder='Username or Email'></input>
        <input id="password"placeholder='Password'></input>
        <button onClick={signIn}>Ready</button>
        {/* <link href='/'>Ainda não possui uma conta ?</link> */}
      </div>
    </section>
  )
}
