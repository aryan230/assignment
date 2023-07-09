import React from "react";
import Data from "./../Data/data.json";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function CompleteProducts() {
  return (
    <>
      <div className="top-all-container">
        <h1>All products</h1>
        <div className="top-filter-mobile">
          <button>
            Filters <ArrowDropDownIcon />
          </button>
          <button>
            Sorting <ArrowDropDownIcon />
          </button>
        </div>
      </div>
      <div className="top-all-container-inside">
        <div className="tpa-left">
          <div className="tpa-left-check">
            <h4>Product type</h4>
            <ul>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">Furniture</label>
              </li>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">Homeware</label>
              </li>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">Sofas</label>
              </li>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">Homeware</label>
              </li>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">Light fittings</label>
              </li>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">Accessories</label>
              </li>
            </ul>
          </div>
          <div className="tpa-left-check">
            <h4>Price</h4>
            <ul>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">0-100</label>
              </li>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">101-250</label>
              </li>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">250+</label>
              </li>
            </ul>
          </div>
          <div className="tpa-left-check">
            <h4>Designer</h4>
            <ul>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">Robert Smith</label>
              </li>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">Liam Gallagher</label>
              </li>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">Biggie Smalls</label>
              </li>
              <li>
                <input type="checkbox" name="scales" />
                <label htmlFor="">Thom Yorke</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="tpa-right">
          {Data &&
            Data.map((doc) => (
              <Link
                to={`/product/${doc.id}`}
                className="t3-element link-hidder"
              >
                <img src={doc.image} alt="" />
                <h4>The Dandy chair</h4>
                <p>£{doc.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default CompleteProducts;
