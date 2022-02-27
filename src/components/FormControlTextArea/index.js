function FormControlTextArea({value, onChange, id, placeholder, label, rows}) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <textarea
        value={value}
        className="form-control"
        id={id}
        rows={rows}
        placeholder={placeholder}
        onChange={(evento) => onChange(evento.target.value)} />
    </div>
  )
}

export default FormControlTextArea;