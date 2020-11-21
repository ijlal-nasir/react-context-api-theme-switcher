import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from './Profile.module.css';
import ThemeToggler from './ThemeToggler';

const Profile = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);

    const theme = isLightTheme ? light : dark;

    

    const ImageCol = () => (
        <div className={styles.imageColWrapper}>
            <img height="100%" width="100%" src="https://i.pravatar.cc/1000?img=12" alt="profile"/>
        </div>
    )

    const IntroCol = () => (
        <div className={styles.introColWrapper}>
            <h1 className={styles.name} style={{color: theme.syntax}} >Donald McKinney</h1>
            <h5 className={styles.position} style={{color: theme.sub}}>Full-Stack Web Developer</h5>
            <p className={styles.description}>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
            <ThemeToggler />
        </div>
    )

    return(
        <div className={styles.profileContainer} style={{backgroundColor: theme.bg, boxShadow: `0px 0px 25px 2px ${theme.shadow}`}}>
            <ImageCol />
            <IntroCol />
        </div>
    )
}

export default Profile;