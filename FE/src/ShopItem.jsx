export default function (props) {
    const {title,type, options} = props
    
  return (
    <div className="shop-item">
      <label htmlFor="">{title}</label>
      <input type={type} ></input>
    </div>
  );
}
