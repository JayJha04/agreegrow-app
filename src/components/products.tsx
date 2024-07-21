import React from 'react';
import { IProduct } from '../models/product';
import Ratings from './helper/rating';

const Products: React.FC = (props) => {
    const mockProducts: Array<IProduct> = [
        {
            name: 'Cold Pressed Groundnut Oil',
            price: 320,
            weight: '1 Litre',
            description: 'Groundnut oil is also known as peanut oil. Among the healthiest oils that are useful to humans, groundnut oil could not be missed.',
            benifits: ['Suits for Deep Frying',
                'Heart Healthy Omega 3s',
                'Supports Brain Health', 'High Smoke Point'],
        },
        {
            name: 'Cold Pressed Groundnut Oil',
            price: 1020,
            weight: '10 Litre',
            description: 'Groundnut oil is also known as peanut oil. Among the healthiest oils that are useful to humans, groundnut oil could not be missed.',
            benifits: ['Suits for Deep Frying',
                'Heart Healthy Omega 3s',
                'Supports Brain Health', 'High Smoke Point'],
        },
        {
            name: 'Cold Pressed Groundnut Oil',
            price: 520,
            weight: '5 Litre',
            description: 'Groundnut oil is also known as peanut oil. Among the healthiest oils that are useful to humans, groundnut oil could not be missed.',
            benifits: ['Suits for Deep Frying',
                'Heart Healthy Omega 3s',
                'Supports Brain Health', 'High Smoke Point'],
        },
        {
            name: 'Cold Pressed Groundnut Oil',
            price: 350,
            weight: '3 Litre',
            description: 'Groundnut oil is also known as peanut oil. Among the healthiest oils that are useful to humans, groundnut oil could not be missed.',
            benifits: ['Suits for Deep Frying',
                'Heart Healthy Omega 3s',
                'Supports Brain Health', 'High Smoke Point'],
        }
    ];

    return (
        <>
            {mockProducts.length > 0 && (
                <>
                    <div className='d-flex product-container'>
                        <div className="card product-item">
                            <span className="position-absolute translate-middle badge rounded-pill bg-danger top-10 start-10 mt-2 ms-3">
                                -19%
                            </span>
                            <img src="../../Cold-Pressed-Groundnut-Oil.jpg" className="card-img-top" alt="..." />
                            <div className="card-body title">
                                <h5 className="card-title">Cold Pressed Groundnut Oil</h5>
                            </div>
                            <div className="card-body details">
                                <p className="card-text price"> &#8377;350</p>
                                <p className="card-text weight">Weight: <span className="value">1 Litre</span></p>
                                <div className='d-grid'><button className='btn btn-danger add-to-cart-btn'><i className="bi bi-bag-plus me-2"></i> Add to Cart</button></div>
                                <p className="card-text py-4"><Ratings rating={4.5} /></p>
                            </div>
                        </div>
                        <div className="card product-item">
                            <span className="position-absolute translate-middle badge rounded-pill bg-danger top-10 start-10 mt-2 ms-3">
                                -27%
                            </span>
                            <img src="../../Cold-Pressed-Groundnut-Oil.jpg" className="card-img-top" alt="..." />
                            <div className="card-body title">
                                <h5 className="card-title">Cold Pressed Groundnut Oil</h5>
                            </div>
                            <div className="card-body details">
                                <p className="card-text price"> &#8377;350</p>
                                <p className="card-text weight">Weight: <span className="value">1 Litre</span></p>
                                <div className='d-grid'><button className='btn btn-danger add-to-cart-btn'><i className="bi bi-bag-plus me-2"></i> Add to Cart</button></div>
                                <p className="card-text py-4"><Ratings rating={3.5} /></p>
                            </div>
                        </div>
                        <div className="card product-item">
                            <span className="position-absolute translate-middle badge rounded-pill bg-danger top-10 start-10 mt-2 ms-3">
                                -52%
                            </span>
                            <img src="../../Cold-Pressed-Groundnut-Oil.jpg" className="card-img-top" alt="..." />
                            <div className="card-body title">
                                <h5 className="card-title">Cold Pressed Groundnut Oil</h5>
                            </div>
                            <div className="card-body details">
                                <p className="card-text price"> &#8377;350</p>
                                <p className="card-text weight">Weight : <span className="value">1 Litre</span></p>
                                <div className='d-grid'><button className='btn btn-danger add-to-cart-btn'><i className="bi bi-bag-plus me-2"></i> Add to Cart</button></div>
                                <p className="card-text py-4"><Ratings rating={5} /></p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Products;