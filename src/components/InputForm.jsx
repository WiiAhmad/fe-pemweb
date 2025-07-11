
function InputForm(props) {
  const {textLabel, htmlFor, placeholder, type, value, onChange, id} = props;
  return (
    <div className="my-3">
      <label htmlFor={htmlFor}>{textLabel}</label>
      <input
        type={type}
        id={id}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputForm;