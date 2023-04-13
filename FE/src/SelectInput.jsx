export default function (props) {
    const {title, options} = props
  return (
    <div className="shop-item">
      <label htmlFor={title}>{title}</label>
      <select onChange={()=>{}}>
        {options.map(opt => {
            return <option></option>
        })}
      </select>
    </div>
  );
}
