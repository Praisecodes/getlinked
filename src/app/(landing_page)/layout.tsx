import { Header } from "@/components/molecules"
import { Footer } from "@/components/templates";

const Layout = ({ children }: { children: React.ReactNode; }): React.ReactNode => {
  return (
    <main>
      <Header />
      <section className={`font-montserrat text-white`}>
        {children}
      </section>
      <Footer />
    </main>
  )
}

export default Layout;
