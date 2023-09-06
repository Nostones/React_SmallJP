import axios from "axios";
import $ from "jquery";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import UserForm from "../components/UserForm.tsx";
import {getProductList, getUserList} from "../services/product-api.ts";
import useFetchData from "../hooks/productFetchData.ts";
import {useSelector} from "react-redux";
import store from "../store/index.ts";


export type ProductType = {id: number, name: string, thumbnail: string, type: string, AttributeSet: string, SKU: string, Price: number, Quantity: number, Visibility: string, Status: boolean, Website: string}

const ProductItem = ({product}: {product: ProductType}) => {
    return <Link to={`/product/${product.id}`}><div >
        <p>Name: {product.name}</p>
        <p>Type: {product.type}</p>
        <p>AttributeSet: {product.AttributeSet}</p>
        <p>SKU: {product.SKU}</p>
        <p>Price: {product.Price}</p>
        <p>Quantity: {product.Quantity}</p>
        <p>Visibility: {product.Visibility}</p>
        <p>Status: {product.Status}</p>
        <p>Website: {product.Website}</p>
    </div></Link>
}

export function getListProduct() {
    axios.get('https://64b14794062767bc4825f76a.mockapi.io/product').then((response) => {
        let bodyContent = ""
        for (let i=0; i<response.data.length;i++){
            bodyContent += "<tr>";
            bodyContent += "<td class=\"text-center\">" + response.data[i].id + "</td>";
            bodyContent += "<td class=\"text-center\">" + response.data[i].name + "</td>";
            bodyContent += "<td class=\"text-center\"><img src=\"" + response.data[i].thumbnail + "\" style=\"width: 50px; height: 50px;\"/></td>";
            bodyContent += "<td class=\"text-center\">" + response.data[i].type + "</td>";
            bodyContent += "<td class=\"text-center\">" + response.data[i].AttributeSet + "</td>";
            bodyContent += "<td class=\"text-center\">" + response.data[i].SKU + "</td>";
            bodyContent += "<td class=\"text-center\">" + response.data[i].Price + "</td>";
            bodyContent += "<td class=\"text-center\">" + response.data[i].Quantity + "</td>";
            bodyContent += "<td class=\"text-center\">" + response.data[i].Visibility + "</td>";
            bodyContent += "<td class=\"text-center\">" + response.data[i].Status + "</td>";
            bodyContent += "<td class=\"text-center\">" + response.data[i].Website + "</td>";
            bodyContent += "<td class=\"text-center\"><a href='User_update.html?id=" + response.data[i].id + "' class=\"btn btn-primary\" >Update</a></td>";
            bodyContent += "</tr>";
        }
        $("#bodyadd").append(bodyContent);
    }).catch(error => {
        console.log(error)
    })
}


getListProduct();
const ListProduct = () => {

    useEffect(() => {
        ""
    }, [])

    return <div>
        <div className="container1">
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th className="text-center"> Id</th>
                    <th className="text-center"> Name</th>
                    <th className="text-center"> Thumbnail</th>
                    <th className="text-center"> Type</th>
                    <th className="text-center"> AttributeSet</th>
                    <th className="text-center"> SKU</th>
                    <th className="text-center"> Price</th>
                    <th className="text-center"> Quantity</th>
                    <th className="text-center"> Visibility</th>
                    <th className="text-center"> Status</th>
                    <th className="text-center"> Website</th>
                    <th className="text-center">
                        <a href='/product-form' className="btn btn-warning">Add Product</a>
                    </th>
                </tr>
                </thead>
                <tbody id="bodyadd"></tbody>
            </table>
        </div>
    </div>
}

const UserList = () => {
    const { data, getData } = useFetchData(getProductList)
    const storeData = useSelector(state => state.user);
    console.log(storeData);
    return (
        <div className="grid grid-cols-2 w-screen h-screen">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <UserForm updateList={getData} />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full border-l-2 border-white border-solid">
                {
                    data?.map((item, index) => <ProductItem product={item} key={index}/>)
                }
            </div>
        </div>
    )
}


const Item = styled.div`
  margin: 10px;
  border: 1px solid white;
  padding: 10px;
`
export default ListProduct;