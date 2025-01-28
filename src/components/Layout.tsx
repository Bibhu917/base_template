import { useSelector } from "react-redux"
import type { RootState } from "../store"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import MainContent from "./MainContent"

const Layout = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen)

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-0" : "ml-[-250px]"}`}>
          <MainContent />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

