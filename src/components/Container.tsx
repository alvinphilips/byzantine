import Head from "next/head"
import { useRouter } from "next/router"

interface IContainerProps {
  children: React.ReactNode
  date?: string
  [key: string]: any
}
export const Container = (props: IContainerProps) => {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: "Byzantine",
    description: "A voting platform that makes no sense",
    image: "/byzantine.svg",
    type: "website",
    ...customMeta,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://byzantine.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://byzantine.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Byzantine" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <main>{children}</main>
    </div>
  )
}
