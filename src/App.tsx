import './App.css';
import Pomodoro from './components/Pomodoro.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';

function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Pomodoro />
            </ThemeProvider>
        </>
    );
}

export default App;
