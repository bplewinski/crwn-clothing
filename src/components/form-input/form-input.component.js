import '../form-input/form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  // if label exists then render label below
  // if label == length apprend shrink, otherwise do nothing ''
  return (
    <div className="group">
      <input className="form-input"{...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
