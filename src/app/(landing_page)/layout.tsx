import { Header } from "@/components/molecules"
import { Footer } from "@/components/templates";

const Layout = ({ children }: { children: React.ReactNode; }): React.ReactNode => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout;
