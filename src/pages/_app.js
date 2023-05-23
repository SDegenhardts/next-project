import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import Context from "../context/context"

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Context>
      <Component {...pageProps} />
    </Context>
    </>
  )
}

export default MyApp