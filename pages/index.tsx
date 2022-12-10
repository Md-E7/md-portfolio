import Head from 'next/head'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

const Welcome = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Welcome | Md-E7</title>
      </Head>

      <AppHeader/>

      <main className="container mx-auto flex flex-1 flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-mono text-4xl font-semibold md:text-6xl lg:text-7xl">Selamat datang</span>
          <span className="font-mono text-2xl font-semibold md:text-4xl lg:text-5xl">Di portofolio saya</span>
        </div>
      </main>

      <AppFooter/>
    </>
  )
}

export default Welcome
