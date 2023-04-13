import ShopItem from "./ShopItem";
import SelectInput from "./SelectInput";
function Shop() {
  return (
    <div className="shop-body">
      <div className="Shop">
        <div className="shop-mid">
          
          <SelectInput title='Categoiry' options={[]}/>

          <div className="shop-item">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="product name"></input>
          </div>

          <div className="shop-item">
            <label htmlFor="">Min price</label>
            <input type="number" name="minprice"></input>
          </div>
          <div className="shop-item">
            <label htmlFor="">Max price</label>
            <input type="number" name="maxprice"></input>
          </div>
          <div className="shop-item-submit">
            <button>search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
