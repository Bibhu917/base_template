import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface SidebarState {
  isOpen: boolean
}

const initialState: SidebarState = {
  isOpen: true, // Set initial state to open
}

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
  },
})

export const { toggleSidebar, setSidebarOpen } = sidebarSlice.actions
export default sidebarSlice.reducer

