import Head from 'next/head'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import Image from 'next/image'

const Index = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Md-E7 Portfolio</title>

        <meta name={'description'} content={''}/>
      </Head>

      <AppHeader/>

      <main className="flex flex-col items-center justify-center">
        <section id={'about_me'} className={'flex min-h-screen w-full max-w-sm flex-col justify-center gap-6 p-4'}>
          <Image src={'/images/md-e7.svg'} alt={'Md-E7 logo'} width={500} height={500} className="mx-auto w-44 rounded-full border border-slate-300"/>

          <div className={'flex flex-col gap-4 text-center'}>
            <h2 className={'space-x-2 text-2xl font-bold'}>
              <span>Made Egi Darma Saputra Front-End</span>
              <span className={'text-blue-600'}>Developer</span>
            </h2>

            <div className={'flex flex-col gap-2'}>
              <p className={'space-x-1 text-slate-500'}>
                <span className={'font-medium'}>Halo 👋</span>
                <span>Saya Egi, saya ingin menjadi Full Stack Developer.</span>
              </p>
              <p className={'text-slate-500'}>Saya sudah belajar dan mencoba beberapa bahasa program, framework dan juga library.</p>
              <p className={'text-slate-500'}>Saya kurang bagus dalam mendesain tampilan jadi saya biasanya mencari referensi dari beberapa website dan menggabungkan referensi yang saya dapat dan mulai membuat tampilan.</p>
            </div>

            <div className={'flex items-center justify-center gap-2'}>
              <a href="https://github.com/md-e7">
                <Image src={'/images/github.svg'} alt={'Github Logo'} width={32} height={32} className={'h-8 w-8'}/>
              </a>
            </div>
          </div>
        </section>

        <section id={'my_skills'} className={'flex min-h-screen w-full max-w-sm flex-col justify-center gap-6 p-4'}>
          <div className={'flex flex-col gap-4 text-center'}>
            <h2 className={'text-2xl font-bold'}>Kehalian saya</h2>
            <p className={'text-slate-500'}>Ini semua adalah bahasa program, bahasa markah, kerangka kerja, alat, yang biasa saya gunakan dan sudah luamayn saya pahami.</p>
          </div>

          <div className={'grid grid-cols-2 items-center justify-items-center gap-2'}>
            <div className={'flex w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/html5.svg'} alt={'HTML5 Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium'}>HTML5</span>
            </div>
            <div className={'flex w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/css3.svg'} alt={'CSS 3 Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium'}>CSS 3</span>
            </div>
            <div className={'flex w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/javascript.svg'} alt={'JavaScript Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium'}>JavaScript</span>
            </div>
            <div className={'flex w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/nodejs.svg'} alt={'Node.js Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium'}>Node.js</span>
            </div>
            <div className={'flex w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/typescript.svg'} alt={'TypeScript Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium'}>TypeScript</span>
            </div>
            <div className={'flex w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/eslint.svg'} alt={'ESLint Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium'}>ESLint</span>
            </div>
            <div className={'flex w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/tailwindcss.svg'} alt={'Tailwind CSS Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium'}>Tailwind CSS</span>
            </div>
            <div className={'flex w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/nextjs.svg'} alt={'Next.js Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium'}>Next.js</span>
            </div>
            <div className={'flex w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/koajs.svg'} alt={'Koa.js Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium'}>Koa.js</span>
            </div>
            <div className={'flex w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/expressjs.svg'} alt={'Express.js Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium'}>Express.js</span>
            </div>
          </div>
        </section>
      </main>

      <AppFooter/>
    </>
  )
}

export default Index
