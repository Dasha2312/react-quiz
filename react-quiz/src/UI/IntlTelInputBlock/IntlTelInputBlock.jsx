import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'

import { isValidPhoneNumber } from 'libphonenumber-js';

import styles from "./IntlTelInputBlock.module.scss"


function IntlTelInputBlock({control, Controller, disabled}) {
  return (
    <>
      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Phone number is required",
          validate: {
            validPhone: (value) => {
              if (value && !isValidPhoneNumber(value)) {
                return "Please enter a valid phone number";
              }
              return true;
            },
          },
        }}
        render={({ field: {name, value, onChange, ref, onBlur}, fieldState }) => (
          <>
            <PhoneInput
              containerClass={`${styles.inputPhoneBlock}`}
              inputClass={`${styles.inputPhoneBlock__input} ${fieldState?.invalid ? styles.inputPhoneBlock__inputError : ''}`}
              buttonClass={`${styles.inputPhoneBlock__dropdownBtn}`}
              dropdownClass={`${styles.inputPhoneBlock__dropdown}`}
              value={value}
              disabled={disabled}
              onChange={(value, country, event, formattedValue) => {
                  onChange(formattedValue);
              }}
              onBlur={onBlur}
              enableSearch={true}
              inputProps={{
                autoFocus: false,
                name,
                ref
              }}
              country={"ua"}
            />
            {fieldState?.invalid && <div className="errorBlock">{fieldState?.error?.message}</div>}
          </>
        )}
      />
     </>
  )

}

export default IntlTelInputBlock;