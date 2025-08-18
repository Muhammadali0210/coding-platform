import {create} from 'zustand';

export const useSidebarStore = create((set) => ({
    isOpenSidebar: true,   
    toggleSidebar:  () => set((state: { isOpenSidebar: boolean; }) => ({ isOpenSidebar: !state.isOpenSidebar })),
}))