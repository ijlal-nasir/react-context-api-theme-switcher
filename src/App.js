import { useContext } from 'react';
import './App.css';
import Profile from './components/Profile';
import { ThemeContext } from './contexts/ThemeContext';


function App() {

	const { isLightTheme, light, dark } = useContext(ThemeContext);

    const theme = isLightTheme ? light : dark;

	return (
		
		<main className="Container" style={{backgroundColor: theme.main}}>
			<Profile />
		</main>
		
	);
}

export default App;
