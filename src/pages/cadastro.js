import styles from '@/styles/cadastro.module.css'

// // import { Message_data } from "../../context/context";
// // import { useContext } from "react";
// // import { useRouter } from "next/router";

// // import { useState } from "react"

export default function cadastro(){
//     // const [user, setUser] = useState("Luigi")
//     const { message, setMessage } = useContext(Message_data);

// const router = useRouter();

// function sendData() {
//     var data = document.getElementById("context_id").value;
//     setMessage(data);
//   }

    return(
        <section className={styles.container}>
      <div>
        <h1 className={styles.font}>
        REGISTER
        </h1>
        <input id="username" placeholder='Username'></input>
        <input id="email" placeholder='Email'></input>
        <input id="password"placeholder='Password'></input>
        <button>Ready</button>
        <h1><a href="/login">
          Já possui um login?
          </a></h1>
        {/* <link href='/'>Ainda não possui uma conta ?</link> */}
      </div>
    </section>
    )
}