import styles from '@/styles/login/Login.module.css'

export default function Login() {
  let users = [
    {
      email:"santhiago.dg@hotmail.com", 
      password: "senhaforte1",
    }
  ]
  function signIn(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    // console.log(email,password)
    users.find(i => {
      i.email === email &&
      i.password === password
    })
  }
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.font}>
          SIGN IN
        </h1>
        <input id="email" placeholder='Username or Email'></input>
        <input id="password"placeholder='Password'></input>
        <button onClick={signIn}><a href='#'>To Start</a></button>
        {/* <link href='/'>Ainda não possui uma conta ?</link> */}
      </div>
    </section>
  )
}
