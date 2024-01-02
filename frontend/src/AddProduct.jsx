import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const [data, setData] = useState({
		clothingname: '',
		price: '',
		image: ''
	})
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault();
		const formdata = new FormData();
		formdata.append("clothingname", data.clothingname);
		formdata.append("price", data.price);
		formdata.append("image", data.image);
        axios.post('http://localhost:3000/createproduct', formdata)
		.then(res => {
			alert("Success");
			navigate('/createproduct')
		})
		.catch(err => console.log(err));
	}
	const back =() =>{
		navigate('/');
	}
    return (
<div className='d-flex flex-column align-items-center pt-4'>
			<h2>ADD CLOTHING</h2>
			<form className="row g-3 w-50" onSubmit={handleSubmit}>

			<div className="col-12">
					<label for="inputproductname" className="form-label">Product Name</label>
					<input type="text" className="form-control" id="inputproductname" placeholder='Enter Clothing Brand' autoComplete='off'
					onChange={e => setData({...data, clothingname: e.target.value})}/>
				</div>
				
				<div className="col-12">
					<label for="inputprice" className="form-label">Price</label>
					<input type="number" className="form-control" id="inputprice" placeholder="Enter Price" autoComplete='off'
					onChange={e => setData({...data, price: e.target.value})}/>
				</div>

				<div className="col-12 mb-3">
					<label className="form-label" for="inputGroupFile01">Select Image</label>
					<input type="file" className="form-control" id="inputGroupFile01"
					onChange={e => setData({...data, image: e.target.files[0]})}/>
				</div>
				<div style={{display: 'flex'}}>
				 
					<button type="submit" className="btn btn-primary">Create</button>
				
			
					<button style= {{marginLeft: '5px'}} onClick={back} type="submit" className="btn btn-primary">Back</button>
				</div>
				
				
			</form>
		</div>
    )
}

export default AddProduct;