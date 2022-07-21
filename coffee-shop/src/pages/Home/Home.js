import { useEffect, useState } from "react";
import productApi from "~/api/productApi";
import BlogItem from "~/components/BlogItem";
import Button from "~/components/Button";
import ProductItem from "~/components/ProductItem";
import config from "~/config";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productFetch = async () => {
            try {
                const params = {_page: 1, _limit: 10}
                const response = await productApi.getAll(params);
                console.log(response);
            } catch(error) {
                console.log('fail', error);
            }
        }
        productFetch();
    }, [])
    return ( 
        <div>
            <Button buttonText primary>View Products</Button>
            <Button buttonText secondary>View Products</Button>
            <div style={{width: '200px'}}>
                <ProductItem to={config.routes.login} tittle="Ethiopia Coffee" price={"$15.00"} image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"/>
            </div>
            <div style={{width: '400px'}}>
                <BlogItem 
                to={config.routes.login} 
                tittle="Prep Techniques" 
                description="Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus maecenas tempus,"
                image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"/>
            </div>
        </div>
     );
}

export default Home;