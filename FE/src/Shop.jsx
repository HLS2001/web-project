import ShopItem from "./ShopItem";
import SelectInput from "./SelectInput";

function Shop() {
  return (
    <div className="shop-body">
      <form className="Shop">
        <div className="shop-mid">
          <SelectInput title="Categoiry" options={[]} />

          <ShopItem title="Name" type="text" />
          <ShopItem title="Min Price" type="number" />
          <ShopItem title="Max Price" type="number" />

          <div className="shop-item-submit">
            <button>search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Shop;
