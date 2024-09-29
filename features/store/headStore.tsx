import { create } from 'zustand';

type State = {
  curerntPage: string;
};

type Action = {
  setPage: (page:string) => void;
};

const useHeadStore = create<State & Action>((set) => ({
  currentPage : '',
  setPage: (page) => set({currentPage: page}),
}));

export default useHeadStore;