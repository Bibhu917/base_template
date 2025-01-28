import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store"
import { toggleSidebar } from "../features/sidebarSlice"

const Header = () => {
  const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen)

  return (
    <header className="bg-blue-600 text-white p-4 h-16 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="mr-4 focus:outline-none"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isSidebarOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold">My App</h1>
        </div>
      </div>
    </header>
  )
}

export default Header

