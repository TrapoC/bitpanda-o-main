import { create } from 'zustand';

export interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
  market_cap: number;
  total_volume: number;
}

interface CryptoStore {
  cryptocurrencies: Cryptocurrency[];
  loading: boolean;
  error: string | null;
  fetchCryptocurrencies: () => Promise<void>;
}

export const useCryptoStore = create<CryptoStore>((set) => ({
  cryptocurrencies: [],
  loading: false,
  error: null,
  fetchCryptocurrencies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch cryptocurrency data');
      }
      
      const data = await response.json();
      set({ cryptocurrencies: data, loading: false });
    } catch (error) {
      console.error('Error fetching cryptocurrency data:', error);
      set({ 
        error: error instanceof Error ? error.message : 'An unknown error occurred', 
        loading: false 
      });
    }
  },
}));

interface CalculatorStore {
  initialInvestment: number;
  monthlyContribution: number;
  years: number;
  expectedReturn: number;
  setInitialInvestment: (value: number) => void;
  setMonthlyContribution: (value: number) => void;
  setYears: (value: number) => void;
  setExpectedReturn: (value: number) => void;
}

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  initialInvestment: 1000,
  monthlyContribution: 100,
  years: 5,
  expectedReturn: 10,
  setInitialInvestment: (value) => set({ initialInvestment: value }),
  setMonthlyContribution: (value) => set({ monthlyContribution: value }),
  setYears: (value) => set({ years: value }),
  setExpectedReturn: (value) => set({ expectedReturn: value }),
}));