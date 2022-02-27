function FormControlInput({ value, onChange, id, placeholder, type, label, maxLength }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        value={value}
        type={type}
        className="form-control"
        id={id}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(evento) => onChange(evento.target.value)}
      />
    </div>)
}

export default FormControlInput;
