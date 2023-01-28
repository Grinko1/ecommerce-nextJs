import { Layout } from '@/layout/Layout'
import { wrapper } from '@/store/store';
import '@/styles/globals.css'
import { Provider } from 'react-redux';


 function App({ Component, props, ...rest}) {
  const { store, pageProps } = wrapper.useWrappedStore(rest);
  return(
    <>
<Provider store={store}>
    <Layout>
       <Component {...pageProps} />
    </Layout>
    // </Provider>

</>
  )
}

export default App