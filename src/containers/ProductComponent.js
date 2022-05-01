import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { title, price, category, id, image } = product
        return (
            // <div className="four wide column" key={id}>
            //     <Link to={`/product/${id}`}>
            //         <div className="ui link cards">
            //             <div className="card">
            //                 <div className="image">
            //                     <img src={image} alt={title} />
            //                 </div>
            //                 <div className="content">
            //                     <div className="header">{title}</div>
            //                     <div className="meta price">$ {price}</div>
            //                     <div className="meta">{category}</div>
            //                 </div>
            //             </div>
            //         </div>
            //     </Link>
            // </div>
            <div className="card" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card__body">
                        <img src={image} class="card__image" alt={title} />
                        <h2 className="card__title">{title}</h2>
                        <p className="card__description">{category}</p>
                    </div>
                    {/* <button className="card__btn">View Recipe</button> */}
                </Link>
            </div>
        )
    })


    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent