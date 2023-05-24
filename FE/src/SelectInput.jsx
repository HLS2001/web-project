export default function (props) {
    const {title, options, name, onChange} = props
  return (
    <div className="shop-item">
      <label htmlFor={title}>{title}</label>
      <select onChange={onChange} name={name}>
        {options.map(({name, _id}) => {
            return <option value={_id}>{name}</option>
        })}
      </select>
    </div>
  );
}
