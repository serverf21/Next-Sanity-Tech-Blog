import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { lazy } from 'react'
import { ToastContainer } from 'react-toastify';

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      {draftMode ? (
        
          <PreviewProvider token={token}>
            
              <Component {...pageProps} />
              <ToastContainer />
          </PreviewProvider>
        
      ) : (
        <>
          <Component {...pageProps} />
          <ToastContainer />
        </>
      )}
    </>
  )
}
