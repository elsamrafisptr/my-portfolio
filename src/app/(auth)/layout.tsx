import AuthProviders from '@/components/layouts/AuthProviders'

export default async function AuthLayout(
  props: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
  }>
) {
  return <AuthProviders>{props.children}</AuthProviders>
}
