import { createContext, Component } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component{

    state = {
        isLightTheme: true,
        light: { main: "#f5f5f5", syntax: "#000", sub: '#000', ui: "#ddd", bg: "#dddddd", shadow: "darkgray", button: '#333', buttonColor: '#fff'},
        dark: { main: "#444", syntax: "#ddd", sub: '#f5f5f5', ui: "#333", bg: "#333", shadow: "#222", button: '#fff', buttonColor: '#000'}
    }

    toggleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        })
    }

    render(){
        return(
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                { this.props.children }
            </ThemeContext.Provider>
        )
    }
}
