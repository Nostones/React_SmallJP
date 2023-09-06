import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../App.tsx";
import Product, {ProductType} from "../components/Product.tsx";
import {createProduct, updateProduct} from "../services/product-api.ts";

const schema = yup.object({
    name: yup.string().min(1).max(20),
    thumbnail: yup.string().min(1).max(999),
    type: yup.string().min(1).max(20),
    AttributeSet: yup.string().min(1).max(20),
    SKU: yup.string().min(1).max(20),
    Price: yup.string().min(1).max(20),
    Quantity: yup.string().min(1).max(20),
    Visibility: yup.string().min(1).max(20),
    Status: yup.boolean(),
    Website: yup.string().min(1).max(20)
}).required();

const ProductForm = () => {
    const { register, handleSubmit, formState: { errors } }
        = useForm({
        resolver: yupResolver(schema)
    });

    // const dataContext = useContext<any>(AppContext);
    // const navigate = useNavigate();
    // const [name, setName] = useState('')
    // const [type, setType] = useState('')
    // const [AttributeSet, setAttributeSet] = useState('')
    // const [SKU, setSKU] = useState('')
    // const [Price, setPrice] = useState('')
    // const [Quantity, setQuantity] = useState('')
    // const [Visibility, setVisibility] = useState('')
    // const [Status, setStatus] = useState('')
    // const [Website, setWebsite] = useState('')

    // function onSubmit(data: any) {
    //     dataContext?.addProduct({name: data.name});
    //     navigate(`/product-form`)
    // }
    const navigate = useNavigate();

    async function onSubmit(data: any) {
        const productData = {
            name: data.name,
            thumbnail: data.thumbnail,
            type: data.type,
            AttributeSet: data.AttributeSet,
            SKU: data.SKU,
            Price: data.Price,
            Quantity: data.Quantity,
            Visibility: data.Visibility,
            Status: data.Status,
            Website: data.Website
        }
        try {
            console.log(productData);
            console.log(data);
            // if(product){
            //     await updateProduct(productData, product.id)
            //
            // }else {
                await createProduct(productData);
                 navigate('/product')
            // }
        } catch (e) {
            console.log(e)
        }
    }

    return <div className={"container1"}>
        <form onSubmit={handleSubmit(onSubmit)}>
                <p className="title w-20"> Name: </p>
                <input type='text' {...register('name')}  style={{ backgroundColor: 'white', width: 200, height: 20, color: 'black'}}/>
                <p style={{color: 'red'}}>{errors.name?.message}</p>

                <p className="title w-20"> Thumbnail: </p>
                <input {...register('thumbnail')} type='text' style={{ backgroundColor: 'white', width: 200, height: 20, color: 'black'}}/>
                <p style={{color: 'red'}}>{errors.thumbnail?.message}</p>

                <p className="title w-20"> Type: </p>
                <input {...register('type')} type='text' style={{ backgroundColor: 'white', width: 200, height: 20, color: 'black'}}/>
                <p style={{color: 'red'}}>{errors.type?.message}</p>

                <p className="title w-20"> AttributeSet: </p>
                <input {...register('AttributeSet')} type='text' style={{ backgroundColor: 'white', width: 200, height: 20, color: 'black'}}/>
                <p style={{color: 'red'}}>{errors.AttributeSet?.message}</p>

                <p className="title w-20"> SKU: </p>
                <input {...register('SKU')} type='text' style={{ backgroundColor: 'white', width: 200, height: 20, color: 'black'}}/>
                <p style={{color: 'red'}}>{errors.SKU?.message}</p>

                <p className="title w-20"> Price: </p>
                <input {...register('Price')} type='text' style={{ backgroundColor: 'white', width: 200, height: 20, color: 'black'}}/>
                <p style={{color: 'red'}}>{errors.Price?.message}</p>

                <p className="title w-20"> Quantity: </p>
                <input {...register('Quantity')} type='text' style={{ backgroundColor: 'white', width: 200, height: 20, color: 'black'}}/>
                <p style={{color: 'red'}}>{errors.Quantity?.message}</p>

                <p className="title w-20"> Visibility: </p>
                <input {...register('Visibility')} type='text' style={{ backgroundColor: 'white', width: 200, height: 20, color: 'black'}}/>
                <p style={{color: 'red'}}>{errors.Visibility?.message}</p>

                <p className="title w-20"> Status: </p>
                <input {...register('Status')} type='text' style={{ backgroundColor: 'white', width: 200, height: 20, color: 'black'}}/>
                <p style={{color: 'red'}}>{errors.Status?.message}</p>

                <p className="title w-20"> Website: </p>
                <input {...register('Website')} type='text' style={{ backgroundColor: 'white', width: 200, height: 20, color: 'black'}}/>
                <p style={{color: 'red'}}>{errors.Website?.message}</p>

                <input className="ml-16 p-4 mt-8 border-2 border-solid border-white rounded-md cursor-pointer" type="submit" />

        </form>
    </div>

}

export default ProductForm;
