import ProductCard from "../Components/product-card";
import { getProduct } from "../Data/products";



export default function Home(){
    const product=getProduct();
    return <div className="Page">
        <div className="home-hero">
            <h1 className="home-tittle">Welcome to Ecostore</h1>
            <p className="home-subtittle">Discover Amazing products at great prices </p>
        </div>
        <div className="home-container">
            <h2 className="page-tittle">Our product</h2>
            <div className="product-grid">
                {product.map((product)=>(
                    <ProductCard product={product} key={product.id}/>
                ))}
            </div>
        </div>
    </div>;
}