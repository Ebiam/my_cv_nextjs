import style from './ToggleDarkMode.module.css';

export default function ToggleDarkMode({onClick, checked} : {onClick : any, checked: boolean}) {
  return (
    <input type="checkbox" id="toggleDarkMode" checked={checked}
     className={style.darkModeSwitch} onClick={onClick}/>
  );
};