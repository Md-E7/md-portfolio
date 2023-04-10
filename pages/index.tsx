import Head from 'next/head'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { Repository } from '../types'
import 'dayjs/locale/id'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('id')
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
        <section id={'about_me'} className={'flex min-h-screen w-full max-w-sm flex-col items-center justify-center gap-6 p-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl lg:flex-row-reverse lg:items-center lg:justify-between xl:max-w-5xl'}>
          <Image src={'/images/md-e7.svg'} alt={'Md-E7 logo'} width={500} height={500} className="w-44 rounded-full border border-slate-300 shadow-lg transition ease-in-out hover:scale-105 dark:border-slate-800 sm:w-52 lg:w-64"/>

          <div className={'flex flex-col gap-4 text-center lg:text-start'}>
            <h2 className={'text-2xl font-bold sm:text-3xl lg:text-4xl'}>
              <span>Made Egi Darma Saputra</span>
              <br/>
              <span>Front-End</span>
              <span className={'ml-2 text-blue-600 dark:text-blue-500'}>Developer</span>
            </h2>

            <div className={'flex flex-col gap-2 sm:text-lg lg:max-w-lg'}>
              <p className={'space-x-1 text-slate-500 dark:text-slate-400'}>
                <span className={'font-medium'}>Halo 👋</span>
                <span>Saya Egi, saya ingin menjadi Full Stack Developer.</span>
              </p>
              <p className={'text-slate-500 dark:text-slate-400'}>Saya sudah belajar dan mencoba beberapa bahasa pemrograman, kerangka kerja dan alat.</p>
              <p className={'text-slate-500 dark:text-slate-400'}>Saya kurang bagus dalam mendesain tampilan jadi saya biasanya mencari referensi dari beberapa website dan menggabungkan referensi yang saya dapat dan mulai membuat tampilan.</p>
            </div>

            <div className={'flex items-center justify-center gap-2 lg:justify-start'}>
              <a href="https://github.com/md-e7" className={'rounded-full p-1 transition ease-in-out hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-800'}>
                <svg className="h-8 w-8 dark:fill-white" viewBox="0 0 128 128">
                  <title>Github</title>
                  <g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id={'my_skills'} className={'flex min-h-screen w-full max-w-sm flex-col justify-center gap-6 p-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'}>
          <div className={'mx-auto flex flex-col gap-2 text-center lg:max-w-xl'}>
            <h2 className={'text-2xl font-bold sm:text-3xl'}>Kehalian saya</h2>
            <p className={'text-slate-500 dark:text-slate-400 sm:text-lg'}>Ini semua adalah bahasa pemrograman, bahasa markah, kerangka kerja dan alat yang biasa saya gunakan dan sudah luamayn saya pahami.</p>
          </div>

          <div className={'grid grid-cols-2 items-center justify-items-center gap-2 sm:grid-cols-3 lg:gap-2.5 xl:grid-cols-4'}>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow transition ease-in-out hover:scale-105 dark:bg-slate-800'}>
              <Image src={'/images/html5.svg'} alt={'HTML5 Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>HTML5</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow transition ease-in-out hover:scale-105 dark:bg-slate-800'}>
              <Image src={'/images/css3.svg'} alt={'CSS 3 Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>CSS 3</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow transition ease-in-out hover:scale-105 dark:bg-slate-800'}>
              <Image src={'/images/javascript.svg'} alt={'JavaScript Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>JavaScript</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow transition ease-in-out hover:scale-105 dark:bg-slate-800'}>
              <Image src={'/images/nodejs.svg'} alt={'Node.js Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>Node.js</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow transition ease-in-out hover:scale-105 dark:bg-slate-800'}>
              <Image src={'/images/typescript.svg'} alt={'TypeScript Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>TypeScript</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow transition ease-in-out hover:scale-105 dark:bg-slate-800'}>
              <Image src={'/images/eslint.svg'} alt={'ESLint Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>ESLint</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow transition ease-in-out hover:scale-105 dark:bg-slate-800'}>
              <Image src={'/images/tailwindcss.svg'} alt={'Tailwind CSS Logo'} width={32} height={32} className={'h-10 w-10'}/>
              <span className={'font-medium lg:text-lg'}>Tailwind CSS</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow transition ease-in-out hover:scale-105 dark:bg-slate-800'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={'h-10 w-10 dark:fill-white dark:stroke-white'}>
                <title>Next.js</title>
                <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
              </svg>
              <span className={'font-medium lg:text-lg'}>Next.js</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow transition ease-in-out hover:scale-105 dark:bg-slate-800'}>
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" className={'h-10 w-10 dark:fill-white dark:stroke-white'}>
                <title>Koa</title>
                <path d="M0 5.587v12.757h1.19v-4.099l.46-.527 3.147 4.626h1.19L2.33 12.97l2.773-3.13h-.17L1.19 14.058v-8.47zm11.039 4.185c-1.19 0-2.177.391-2.96 1.173-.77.783-1.156 1.883-1.156 3.3 0 1.418.374 2.467 1.122 3.147.749.68 1.718 1.02 2.909 1.02 1.202 0 2.188-.39 2.96-1.173.782-.783 1.173-1.883 1.173-3.3 0-1.417-.374-2.466-1.122-3.147-.749-.68-1.724-1.02-2.926-1.02zm8.896 0c-1.043 0-2.07.232-3.079.697l.068.12c.261-.148.67-.296 1.225-.443.567-.159 1.06-.238 1.48-.238.42 0 .76.057 1.02.17.26.102.442.227.545.374.102.148.18.3.238.46.068.147.09.272.068.374.007.97 0 1.988 0 2.976a9.269 9.269 0 00-.834-.034c-.306 0-.64.017-1.003.051-1.463.091-2.41.34-2.841.749-.215.204-.346.391-.391.561-.046.17-.068.329-.068.476 0 .136.011.273.034.409.193 1.292 1.003 1.939 2.432 1.939 1.225 0 2.115-.505 2.67-1.514v.357c0 .181.131.397.392.646.283.295.81.443 1.582.443H24v-.136h-.527l-.187-.034c-.136-.012-.272-.103-.409-.273-.124-.181-.187-.436-.187-.765v-5.698c0-.363-.147-.709-.442-1.038-.498-.557-1.564-.624-2.313-.63zm-8.862.136c.862 0 1.553.329 2.075.986.522.658.783 1.673.783 3.045 0 1.36-.284 2.427-.85 3.198-.568.76-1.282 1.14-2.144 1.14-.862 0-1.554-.33-2.075-.987-.522-.658-.783-1.667-.783-3.028 0-1.372.284-2.438.85-3.198.568-.77 1.282-1.156 2.144-1.156zm9.491 4.456c.318 0 .63.012.936.034v2.058c-.034.386-.295.789-.783 1.208a2.416 2.416 0 01-1.616.613c-.907 0-1.411-.601-1.513-1.803a3.155 3.155 0 01-.02-.307c0-.499.131-.89.392-1.173.26-.284.822-.477 1.684-.579.314-.038.64-.039.92-.05z"/>
              </svg>
              <span className={'font-medium lg:text-lg'}>Koa.js</span>
            </div>
            <div className={'flex h-full w-full max-w-sm items-center justify-center gap-4 rounded bg-white p-2 shadow transition ease-in-out hover:scale-105 dark:bg-slate-800'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={'h-10 w-10 dark:fill-white dark:stroke-white'}>
                <title>Express.js</title>
                <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/>
              </svg>
              <span className={'font-medium lg:text-lg'}>Express.js</span>
            </div>
          </div>
        </section>

        <section id={'my_projects'} className={'flex min-h-screen w-full max-w-sm flex-col justify-center gap-6 p-4 sm:max-w-[40rem] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'}>
          <div className={'mx-auto flex flex-col gap-2 text-center lg:max-w-xl'}>
            <h2 className={'text-2xl font-bold sm:text-3xl'}>Proyek saya</h2>

            {repos.length === 0 && (
              <p className={'text-slate-500 dark:text-slate-400 sm:text-lg'}>Belum ada proyek.</p>
            )}

            {repos.length === 1 && (
              <p className={'text-slate-500 dark:text-slate-400 sm:text-lg'}>Ini adalah proyek yang saya buat.</p>
            )}

            {repos.length > 1 && (
              <p className={'text-slate-500 dark:text-slate-400 sm:text-lg'}>Ini semua adalah proyek yang saya buat.</p>
            )}
          </div>

          <div className={'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:gap-4 lg:grid-cols-3'}>
            {repos.map(value => (
              <a key={value.id} href={value.html_url} className={'group flex w-full flex-col gap-1 rounded bg-white p-4 shadow transition ease-in-out hover:scale-105 dark:bg-slate-800'}>
                <h3 className={'truncate text-xl font-semibold transition ease-in-out group-hover:text-blue-500'}>{value.name}</h3>
                <p className={'text-sm text-slate-500 dark:text-slate-400'}>{value.description ?? 'Tidak ada deskripsi'}</p>
                <div className={'flex justify-between'}>
                  <p className={'text-sm text-slate-500 dark:text-slate-400'}>{value.language}</p>
                  <p className={'text-sm text-slate-500 dark:text-slate-400'}>Diperbarui {dayjs(value.updated_at).fromNow()}</p>
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

  if (!response.ok) {
    throw new Error('Failed to fetch repositories')
  }

  return {
    props: {
      repos
    },
    revalidate: 60
  }
}
