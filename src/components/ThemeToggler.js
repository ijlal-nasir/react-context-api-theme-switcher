import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from './ThemeToggler.module.css';

function ThemeToggler() {

    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);

    const theme = isLightTheme ? light : dark;

    return (
        <div>
            <button onClick={toggleTheme} className={styles.themeToggler} style={{backgroundColor: theme.button, color: theme.buttonColor}}>{ isLightTheme ? 'Set To Dark': 'Set to Light'} Theme</button>
        </div>
    )
}

export default ThemeToggler;
