import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setSidebarOpen } from "../features/sidebarSlice"

const ResponsiveHandler = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      dispatch(setSidebarOpen(window.innerWidth >= 768))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [dispatch])

  return null
}

export default ResponsiveHandler

