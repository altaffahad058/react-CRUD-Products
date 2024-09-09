import React, {useState} from 'react'

export default function ProductForm(props) {

    const [pName, setName] = useState('');
    const [pPrice, setPrice] = useState('');
    const [pStock, setStock] = useState('');
    const [pDescription, setDescription] = useState('');
    const [pAvailability, setavailability] = useState('');
    const [pImage, setImage] = useState('');

    const nameInputHandler = (e) => {
        setName(e.target.value)
    }

    const priceInputHandler = (e) => {
        setPrice(e.target.value)
    }

    const stockInputHandler = (e) => {
        setStock(e.target.value)
    }

    const descInputHandler = (e) => {
        setDescription(e.target.value)
    }

    const availabilityInputHandler = (e) => {
        setavailability(e.target.checked);
    }

    const imageInputHandler = (e) => {
        setImage(e.target.value)
    }

    const formSubmitHandler = (e) => {
      e.preventDefault();
      let formProduct = {
        pID: 1,
        pName: pName,
        desc: pDescription,
        isAvailable: Boolean(pAvailability),
        image: pImage,
        price: Number(pPrice),
        stock: Number(pStock),
      };

      setName('');
      setPrice('');
      setStock('');
      setDescription('');
      setavailability(false);
      setImage('');

    //   console.log(formProduct);
      props.createProduct(formProduct);

      props.displayCreatProductForm();
    };



  return (
    <form onSubmit={formSubmitHandler} className='flex flex-col gap-5 px-4 py-4 bg-white border-none rounded-xl shadow-2xl'>
        <div className='grid grid-col-3 gap-10'>
            <div className='col-start-1 flex flex-col'>
                <label htmlFor="name">Product Name</label>
                <input type="text" id='name' value={pName} placeholder='Product Name' className='border rounded-lg px-2 py-1' onChange={nameInputHandler} />
            </div>
            <div className='col-start-2 flex flex-col'>
                <label htmlFor="price">Product Price</label>
                <input value={pPrice} type="number" min={0.01} step={0.01} id='price' placeholder='Product Price' onChange={priceInputHandler} className='border rounded-lg px-2 py-1' />
            </div>
            <div className='col-start-3 flex flex-col'>
                <label htmlFor="price">Product Stock</label>
                <input value={pStock} type="number" id='stock' placeholder='Product Stock' onChange={stockInputHandler} className='border rounded-lg px-2 py-1' />
            </div>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="description">Product Discription</label>
            <input id="description" value={pDescription} type="text" placeholder='Product Discription' onChange={descInputHandler} className='border rounded-lg px-2 py-1' />
        </div>
        <div>
            <label className="inline-flex items-center cursor-pointer">
                <input id="isAvailable" type="checkbox" checked={pAvailability} className="sr-only peer" onChange={availabilityInputHandler} />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <label htmlFor='isAvailable' className="ms-3 text-sm font-medium text-gray-900">Is product available in stock?</label>
            </label>
        </div>
        <div className='flex flex-col'>   
            <label className="pb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Select Product Image</label>
            <input onChange={imageInputHandler} value={pImage} className="text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50" id="select-image" type="file" />
        </div>
        <div className='flex justify-center gap-4'>
            <button className='bg-blue-600 text-white px-2 py-1 rounded-full' type="submit">Add Product</button>
            <button className='bg-red-600 text-white px-2 py-1 rounded-full' onClick={props.displayCreatProductForm}>Cancel</button>
        </div>
    </form>
  )
}
