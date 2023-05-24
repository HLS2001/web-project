export default function (props) {
    const {title,type, name} = props
    
  return (
    <div className="shop-item">
      <label htmlFor="">{title}</label>
      <input type={type} name={name} />
    </div>
  );
}
