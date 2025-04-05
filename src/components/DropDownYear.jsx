import styles from '@css/DropDownYear.module.css';
import ClockIcon from '@icons/ClockIcon'

const DropDownYear = ({options, onSelect}) => {

  return (
    <div className={styles.dropdown}>
      <ClockIcon width={16} height={16}/>
      <select 
        onChange={((e) =>onSelect(e.target.value))}
      >
        <option value="" disabled defaultValue>Выберите год</option>
        {options.map((opt,index)=>(
          <option key={index+1} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}

export default DropDownYear;