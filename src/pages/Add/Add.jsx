import React, { useEffect } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {


  const [image,setImage] = useState(false)
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"candle"
  })
  
  

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
    const response = await axios.post(`${url}/api/item/add`,formData);
    if (response.data.success) {
      setData ({
        name:"",
        description:"",
        price:"",
        category:"candle"
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else {
        toast.error(response.data.message)
    }
  }



  return (
    <div className='add'>
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>ფოტო-სურათი</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="app-product-name flex-col">
          <p>დასახელება</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='ნივთის დასახელება' />
        </div>
        <div className="add-product-description flex-col">
          <p>აღწერა</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='ნივთის აღწერილობა' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>კატეგორიის ტიპი</p>
            <select onChange={onChangeHandler} name="category">
              <option value="candle">სანთელი</option>
              <option value="sculpture">ქანდაკება</option>
              <option value="literature">ლიტერატურა</option>
              <option value="ქვები/კრისტალები">ქვები და კრისტალები</option>
              <option value="ეთერზეთები">ეთერზეთები</option>
              <option value="მცენარეები">მცენარეები</option>
              <option value="თილისმები/ამულეტები">თილისმები და ამულეტები</option>
              <option value="ტარო/ორაკულები">ტარო და ორაკულები</option>
              <option value="ეზოთერიკული ნივთები">ეზოთერიკული ნივთები</option>
              <option value="მისტიკური აქსესუარები">მისტიკური აქსესუარები</option>
              <option value="ფენშუი">ფენშუი ნივთები</option>
              <option value="სურნელოვანი ჩხირები">სურნელოვანი ჩხირები</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>ფასი</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='₾' />
          </div>
        </div>
        <button type='submit' className='add-btn'>დამატება</button>
      </form>
    </div>
  )
}

export default Add
