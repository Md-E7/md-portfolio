import Head from 'next/head'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { Repository } from '../types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const Index = ({ repos }: { repos: Repository[] }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Md-E7 Portfolio</title>

        <meta name={'description'} content={''}/>
      </Head>

      <AppHeader/>

      <main className="flex flex-col items-center justify-center">
        <section id={'about_me'} className={'flex min-h-screen w-full max-w-sm flex-col justify-center gap-6 p-4 sm:max-w-xl lg:max-w-4xl lg:flex-row-reverse lg:items-center xl:max-w-5xl'}>
          <Image src={'/images/md-e7.svg'} alt={'Md-E7 logo'} width={500} height={500} className="m-auto w-44 rounded-full border border-slate-300 sm:w-52 lg:w-64"/>

          <div className={'flex flex-col gap-4 text-center lg:text-start'}>
            <h2 className={'text-2xl font-bold sm:text-3xl'}>
              <span>Made Egi Darma Saputra</span>
              <br/>
              <span>Front-End</span>
              <span className={'ml-2 text-blue-600'}>Developer</span>
            </h2>

            <div className={'flex flex-col gap-2 sm:text-lg lg:max-w-lg'}>
              <p className={'space-x-1 text-slate-500'}>
                <span className={'font-medium'}>Halo 👋</span>
                <span>Saya Egi, saya ingin menjadi Full Stack Developer.</span>
              </p>
              <p className={'text-slate-500'}>Saya sudah belajar dan mencoba beberapa bahasa program, framework dan juga library.</p>
              <p className={'text-slate-500'}>Saya kurang bagus dalam mendesain tampilan jadi saya biasanya mencari referensi dari beberapa website dan menggabungkan referensi yang saya dapat dan mulai membuat tampilan.</p>
            </div>

            <div className={'flex items-center justify-center gap-2 lg:justify-start'}>
              <a href="https://github.com/md-e7">
                <Image src={'/images/github.svg'} alt={'Github Logo'} width={32} height={32} className={'h-8 w-8'}/>
              </a>
            </div>
          </div>
        </section>

        <section id={'my_skills'} className={'flex min-h-screen w-full max-w-sm flex-col justify-center gap-6 p-4 sm:max-w-xl lg:max-w-4xl xl:max-w-5xl'}>
          <div className={'mx-auto flex flex-col gap-4 text-center lg:max-w-xl'}>
            <h2 className={'text-2xl font-bold sm:text-3xl'}>Kehalian saya</h2>
            <p className={'text-slate-500 sm:text-lg'}>Ini semua adalah bahasa program, bahasa markah, kerangka kerja, alat, yang biasa saya gunakan dan sudah luamayn saya pahami.</p>
          </div>

          <div className={'grid grid-cols-2 items-center justify-items-center gap-2 sm:grid-cols-3 xl:grid-cols-4'}>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/html5.svg'} alt={'HTML5 Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>HTML5</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/css3.svg'} alt={'CSS 3 Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>CSS 3</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/javascript.svg'} alt={'JavaScript Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>JavaScript</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/nodejs.svg'} alt={'Node.js Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>Node.js</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/typescript.svg'} alt={'TypeScript Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>TypeScript</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/eslint.svg'} alt={'ESLint Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>ESLint</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/tailwindcss.svg'} alt={'Tailwind CSS Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>Tailwind CSS</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/nextjs.svg'} alt={'Next.js Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>Next.js</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/koajs.svg'} alt={'Koa.js Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>Koa.js</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow'}>
              <Image src={'/images/expressjs.svg'} alt={'Express.js Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>Express.js</span>
            </div>
          </div>
        </section>

        <section id={'my_projects'} className={'flex min-h-screen w-full max-w-sm flex-col justify-center gap-6 p-4 sm:max-w-xl lg:max-w-4xl xl:max-w-5xl'}>
          <div className={'mx-auto flex flex-col gap-4 text-center lg:max-w-xl'}>
            <h2 className={'text-2xl font-bold sm:text-3xl'}>Proyek saya</h2>

            {repos.length === 0 && (
              <p className={'text-slate-500 sm:text-lg'}>Belum ada proyek.</p>
            )}

            {repos.length === 1 && (
              <p className={'text-slate-500 sm:text-lg'}>Ini adalah proyek yang saya buat.</p>
            )}

            {repos.length > 1 && (
              <p className={'text-slate-500 sm:text-lg'}>Ini semua adalah proyek yang saya buat.</p>
            )}
          </div>

          <div className={'grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3'}>
            {repos.map(value => (
              <a key={value.id} href={value.html_url} className={'group flex w-full flex-col gap-1 rounded bg-white p-4 shadow'}>
                <h3 className={'truncate text-xl font-semibold group-hover:text-blue-500'}>{value.name}</h3>
                <p className={'text-sm text-slate-500'}>{value.description ?? 'No description'}</p>
                <div className={'flex justify-between'}>
                  <p className={'text-sm text-slate-500'}>{value.language}</p>
                  <p className={'text-sm text-slate-500'}>Updated {dayjs(value.updated_at).fromNow()}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <AppFooter/>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/Md-E7/repos')
  const repos = await response.json()

  return {
    props: {
      repos
    }
  }
}
