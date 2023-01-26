import { Layout } from '@/layout/Layout'
import { wrapper } from '@/store/store';
import '@/styles/globals.css'
// import withRedux from "next-redux-wrapper";


 function App({ Component, pageProps}) {
  return(

    <Layout>
       <Component {...pageProps} />
    </Layout>

  )
}
export default wrapper.withRedux(App)
// export default App