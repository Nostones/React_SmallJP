import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import Container from '../page/Home.tsx'
import productFetchData from "../Hooks/productFetchData.ts";
import {getProductDetail} from "../services/product-api.ts";
import ListProduct from "../page/ListProduct.tsx";
import {useParams} from "react-router-dom";


// const Product_add = () => {
//
//     const params = useParams();
//     const productId = params.id;
//     const { data } = useFetchData(getProductDetail, productId)
//     console.log(data);
//         return <div>
//             <p className='title'>
//                 User's information:
//             </p>
//             {data && <AddProductForm product={data} />}
//         </div>
// }

const Product = () => {

    const params = useParams();
    const productId = params.id;
    const { data } = productFetchData(getProductDetail, productId)
    console.log(data);
    return <Container>
        <p className='title'>
            User's information:
        </p>
        {data && <ListProduct product={data} />}
    </Container>
}

export default Product;