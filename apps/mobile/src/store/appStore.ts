import { create } from 'zustand';

export type NetworkMode = 'online' | 'degraded' | 'offline';

interface AppState {
  networkMode: NetworkMode;
  gpsAvailable: boolean;
  setNetworkMode: (mode: NetworkMode) => void;
  setGpsAvailable: (v: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  networkMode: 'online',
  gpsAvailable: true,
  setNetworkMode: (networkMode) => set({ networkMode }),
  setGpsAvailable: (gpsAvailable) => set({ gpsAvailable })
}));
