import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type Scene = 'home' | 'banner' | 'slots';

export type SutorimaState = {
  scene: Scene;
};

export type SutorimaStateSetters = {
  setScene: (newScene: Scene) => void;
};

const initialState: SutorimaState = {
  scene: 'home',
};

const useStore = create<SutorimaState & SutorimaStateSetters>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setScene: (newScene) => set((state) => ({ ...state, scene: newScene })),
      }),
      {
        name: 'sutorima-storage',
      },
    ),
  ),
);

export default useStore;
