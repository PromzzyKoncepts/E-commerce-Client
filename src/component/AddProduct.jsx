import { HiOutlineCollection } from "react-icons/hi";
import {IoIosArrowForward } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";
function AddProduct(params) {
  return (
    <ul className="w-[300px] h-[300px] bg-black text-white p-[10px]">
      <li className="p-[10px] flex justify-between">
      <HiOutlineCollection className="mr-[30px]" size={20}/>  <a href="" className="text-start w-[70%]">Products</a> <IoIosArrowForward  className="w-[20%]"/>
      </li>
      <li className="p-[10px] flex justify-between ">
      <BsBagCheck/>  <a href="">Add products</a> < IoIosArrowForward/>
      </li>
      <li className="p-[10px]">
        <a href="">Product overview</a>
      </li>
    </ul>
  );
}
export default AddProduct;

{
  /* <form >
<input type="text" name="name"/>
<input type="text" name="description" />
<input type="number" name="price" />
<input type="text" name="category"/>
<input type="number" name="quantity"/>
<input type="image" name="image"/>
</form> */
}
