import styles from './InputText.module.scss';

function InputText({errors, placeholder, type, register, name, disabled}) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className={styles.form__block}>
      <input type={type} name={name} disabled={disabled} autoComplete={`new-${name}`} placeholder={placeholder} className={`${styles.form__input} ${errors.email ? styles.form__inputError : '' }`} 
        {...register(name, {
          required: `${capitalizedName} is required`,
          validate: {
            ...(type == 'email' && {
              validEmail: (value) =>
                /\S+@\S+\.\S+/.test(value) ||
                'Please enter a valid email address',
            })
            
          },
        })}
      />
      {errors[name] && (
          <div className="errorBlock">
            {errors[name].message}
        </div>
        )}
    </div>
  );
}

export default InputText;