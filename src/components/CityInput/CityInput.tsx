import { ChangeEventHandler, useCallback } from "react";
import searchIcon from '../../assets/search.svg';
import styles from './styles.module.css';

interface Props {
  onChange: (text: string) => void;
  value?: string;
}
const CityInput = ({ onChange, value }: Props) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    onChange(event.target.value);
  }, [onChange]);

  return (
    <div className={styles.container}>
      <input className={styles.cityInput} value={value} placeholder="Enter a city" onChange={handleChange}  />
      <img src={searchIcon} className={styles.searchIcon} />
    </div>);
}

export default CityInput;