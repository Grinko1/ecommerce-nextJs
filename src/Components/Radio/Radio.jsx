import style from './Radio.module.scss';
import cn from 'classnames'

const Radio = ({children, id, htmlFor, name, oneLine= false, value, onChange, disabled = false}) => {
    return (
        <div className={cn(style.form_radio, {[style.radioCenter] : oneLine == true }) }>
        <input id={id} type="radio" name={name} value={value} onChange={onChange} disabled={disabled} />
       <label htmlFor={htmlFor}>{children} </label>
   </div>
    );
};

export default Radio;