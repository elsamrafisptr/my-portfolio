import MainAppProviders from '@/components/layouts/MainAppProviders'

export default async function MainAppLayout(
  props: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
  }>
) {
  return <MainAppProviders>{props.children}</MainAppProviders>
}
