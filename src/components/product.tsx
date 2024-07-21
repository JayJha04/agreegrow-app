import React from 'react';
import Ratings from './helper/rating';
import AgreegrowCarousel from './helper/carousel';
import AgreegrowCounter from './helper/agreegrowCounter';

const Product: React.FC = (props) => {
    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-6">
                    <AgreegrowCarousel />
                </div>
                <div className="col-6 mb-4">
                    <div className="row">
                        <div className='fs-3'>Cold Pressed Groundnut Oil</div>
                        <div className='my-1'><Ratings rating={3.5} /><span className='ps-1 pe-2'>(183)</span><span className='border-start px-2'><i className="bi bi-chat-dots"></i> 38 questions</span></div>
                        <div className=""> &#8377;350</div>
                    </div>
                    <div className="row my-4 align-items-center">
                        <div className="col-3">Weight : <span>200 ml</span></div>
                        <div className="col-4 mx-3"><AgreegrowCounter intitialCount={1} /></div>
                        <div className="col-4"><div className='d-grid'><button className='btn btn-danger'><i className="bi bi-bag-plus me-1"></i> Add to Cart</button></div></div>
                    </div>
                    <div className="row my-4">
                        <div className="col-7">
                            <div className='d-grid'><button className='btn btn-warning'>Place Your COD Order</button></div>
                        </div>
                        <div className="col-5">
                            <div className='d-grid'><button className='btn btn-success'><i className="bi bi-whatsapp"></i> Order via WhatsApp!</button></div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className='fs-4 fw-medium mb-2'>Benifits</div>
                        <div className="row">
                            <div className="col">
                                <span>Supports Brain Health</span>

                            </div>
                            <div className="col">
                                <span >Supports Heart Health</span>

                            </div>
                            <div className="col">
                                <span>Promotes Gut Health</span>

                            </div>
                            <div className="col">
                                <span>Improves Digestion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row border rounded-3">
                <div className="col">
                    <div className='fs-5 fw-medium'>
                        Description
                    </div>
                    <div>
                        <div className="fs-2 fw-bold">
                            Buy Cold Pressed Gingelly Oil Online at the Best Price
                        </div>
                        <div>
                            Cold Pressed Gingelly Oil is extracted from dry sesame seeds by cold-pressing method. Cold pressing is a mechanical process of extracting oil from oil seeds at room temperature in a traditional way without adding any chemicals, preservatives, or external heat.

                            Cold Pressed Gingelly Oil is unbleached, unrefined and cold-pressed which has a fresh aroma of sesame. For cooking and dietary purpose, cold-pressed sesame oil is one of the healthiest cooking oil with numerous health benefits.
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
            </div>
            <div className="row my-2 justify-content-center text-center">
                <div className="col-6">
                    <div className='fs-4 fw-medium my-4'>Write a review</div>
                    <div className='mb-4'>
                        <div>Rating</div>
                        <Ratings rating={5} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Review Title</label>
                        <input type="email" className="form-control rounded-4" id="exampleFormControlInput1" placeholder="Give your review a title" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Review</label>
                        <textarea className="form-control rounded-4" id="exampleFormControlTextarea1" rows={4} placeholder="Write your comments here"></textarea>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name (displayed publicly )</label>
                        <input type="email" className="form-control rounded-4" id="exampleFormControlInput1" placeholder="Enter your name(public)" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control rounded-4" id="exampleFormControlInput1" placeholder="Enter your email (private)" />
                    </div>
                    <p>How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms and conditions and privacy policy.</p>
                    <div className="my-4">
                        <button className='btn btn-outline-success me-4'>Cancel review</button>
                        <button className='btn btn-success'>Submit Review</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
            </div>
        </div>
    );
}

export default Product;