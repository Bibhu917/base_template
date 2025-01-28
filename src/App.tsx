import { Provider } from "react-redux"
import { store } from "./store"
import Layout from "./components/Layout"
import ResponsiveHandler from "./components/ResponsiveHandler"

function App() {
  return (
    <Provider store={store}>
      <ResponsiveHandler />
      <Layout />
    </Provider>
  )
}

export default App

