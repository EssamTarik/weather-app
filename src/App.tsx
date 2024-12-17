import WeatherWidget from './components/WeatherWidget/WeatherWidget'
import WeatherProvider from './providers/WeatherProvider/WeatherProvider'

function App() {
  return (
    <WeatherProvider>
      <WeatherWidget />
    </WeatherProvider>
  )
}

export default App
