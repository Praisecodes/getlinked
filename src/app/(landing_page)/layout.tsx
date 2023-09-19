import { Header } from "@/components/molecules"

const Layout = ({ children }: { children: React.ReactNode; }): React.ReactNode => {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default Layout;
