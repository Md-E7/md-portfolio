import { Html, Head, Main, NextScript } from 'next/document'

export default function Document (): JSX.Element {
  return (
    <Html lang="id" className="scroll-smooth">
      <Head/>
      <body className="bg-white text-black antialiased dark:bg-slate-900 dark:text-white">
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
