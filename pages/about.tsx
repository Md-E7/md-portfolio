import Head from 'next/head'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import Image from 'next/image'

const About = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>About me | Md-E7</title>

        <meta name={'description'} content={'Tentang saya | Md-E7'}/>
      </Head>

      <AppHeader/>

      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden p-4">
        <section className="flex flex-col gap-8 text-center md:text-left">
          <h2 className="animate__animated animate__fadeInDown ml-1 font-mono text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl lg:text-4xl">Tentang saya</h2>

          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
            <Image src={'/images/md-e7.svg'} alt={'Md-E7 logo'} width={500} height={500} className="animate__animated animate__fadeInLeft mx-auto h-32 w-32 rounded-full border border-slate-300 dark:border-slate-700 md:h-48 md:w-48 lg:h-56 lg:w-56"/>

              <div className="flex flex-col gap-2 p-2 md:col-span-2">
                <h3 className="animate__animated animate__fadeInTopRight text-xl font-medium text-slate-700 dark:text-slate-300 md:text-2xl lg:text-3xl">Halo saya egi</h3>

                <p className="animate__animated animate__fadeInTopRight max-w-sm text-slate-500 dark:text-slate-400 md:max-w-md md:text-lg lg:max-w-lg lg:text-xl">Saya ingin jadi fullstack developer.</p>
                <p className="animate__animated animate__fadeInRight max-w-sm text-slate-500 dark:text-slate-400 md:max-w-md md:text-lg lg:max-w-lg lg:text-xl">saya sudah belajar dan mencoba beberapa bahasa pemrograman framework dan library untuk bagian frontend dan backend.</p>
                <p className="animate__animated animate__fadeInBottomRight max-w-sm text-slate-500 dark:text-slate-400 md:max-w-md md:text-lg lg:max-w-lg lg:text-xl">saya kurang bagus dalam mendesain tampilan jadi saya biasanya mencari referensi dari beberapa website dan menggabungkan beberapa referensi yang saya dapat dan mulai membuat tampilan.</p>
              </div>
          </div>
        </section>
      </main>

      <AppFooter/>
    </>
  )
}

export default About
