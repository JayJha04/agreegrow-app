import React, { useEffect, useRef, useState } from 'react';

const CartSidePanel: React.FC = (props) => {
    const [show, setShow] = useState(false);
    const cartSidePanelRef = useRef<HTMLDivElement>(null);

    const handleToggleOnOff = (isShow: boolean) => setShow(isShow);
    const handleOutsideClick = (event: MouseEvent) => {
        if (cartSidePanelRef.current && !cartSidePanelRef.current.contains(event.target as Node)) {
            setShow(false);
        }
    };

    useEffect(() => {
        if (show) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [show]);

    return (
        <>
            <button className="btn btn-primary" onClick={() => handleToggleOnOff(true)}>Shopping Cart</button>

            {show && <div className={`offcanvas-backdrop ${show ? 'show' : ''}`}></div>}
            <div ref={cartSidePanelRef} className={`offcanvas offcanvas-end ${show ? 'show cart-side-panel-container' : ''}`}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Shopping Cart</h5>
                    <button type="button" className="btn-close" onClick={() => handleToggleOnOff(false)}></button>
                </div>
                <div className="offcanvas-body">
                    <div style={{ height: "50vh", overflow: 'auto' }}>
                        <div className="card border border-start-0 border-end-0 py-4" style={{ maxWidth: "540px" }}>
                            <span style={{ position: "absolute", top: "5%", left: "90%", fontSize: "22px" }}><i className="bi bi-x"></i></span>
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img src="../../Cold-Pressed-Groundnut-Oil.jpg" className="img-fluid rounded-start" alt="..." style={{ width: "5rem", height: "5rem" }} />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body" style={{ padding: "0" }}>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border border-start-0 border-end-0 py-4" style={{ maxWidth: "540px" }}>
                            <span style={{ position: "absolute", top: "5%", left: "90%", fontSize: "22px" }}><i className="bi bi-x"></i></span>
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img src="../../Cold-Pressed-Groundnut-Oil.jpg" className="img-fluid rounded-start" alt="..." style={{ width: "5rem", height: "5rem" }} />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body" style={{ padding: "0" }}>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border border-start-0 border-end-0 py-4" style={{ maxWidth: "540px" }}>
                            <span style={{ position: "absolute", top: "5%", left: "90%", fontSize: "22px" }}><i className="bi bi-x"></i></span>
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img src="../../Cold-Pressed-Groundnut-Oil.jpg" className="img-fluid rounded-start" alt="..." style={{ width: "5rem", height: "5rem" }} />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body" style={{ padding: "0" }}>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 py-4" style={{ paddingTop: "535px" }}>
                        <div className='mb-4'>
                            <span className='fw-medium fs-5'>Subtotal</span>
                            <span className='float-end'>&#8377;1350</span>
                        </div>
                        <div className='d-grid my-2'><button className='btn btn-danger'><i className="bi bi-bag-plus me-2"></i> Add to Cart</button></div>
                        <div className='d-grid'><button className='btn btn-success'><i className="bi bi-bag-plus me-2"></i> Add to Cart</button></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CartSidePanel;