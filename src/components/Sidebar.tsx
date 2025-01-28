import { useSelector } from "react-redux"
import type { RootState } from "../store"

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen)

  return (
    <aside
      className={`bg-gray-800 text-white w-[250px] h-[calc(100vh-8rem)] overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav className="p-4">
        <ul>
          {[...Array(20)].map((_, index) => (
            <li key={index} className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                Menu Item {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

