import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartStreaming from 'chartjs-plugin-streaming';
ChartJS.register(
  ChartStreaming,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
