import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import ReactStars from "react-rating-stars-component";
import ProductCart from "../components/productCard" ;
import Color from "../components/color"
import Container from "../components/container";
import {useDispatch, useSelector} from 'react-redux';
import { getallProducts } from "../feactures/products/productSlice";

const OurStore = () => {
    const [grid,setGrid] = useState(4);
    // const gridSetter = (i) => {
    //     setGrid(i);
    // };
    // alert(grid);
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product.product);
    // console.log(productState.product.product);
    // console.log(productState);


    useEffect(() => {
        getProducts();
    },[]);

    const getProducts = () => {
        dispatch(getallProducts());
    };

    return(
        <>
        <Meta title="Our Store"/>
        <BreadCrumb title="Our Store"/>

        <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Shop By Categories
                            </h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Filter By
                            </h3>
                            <div>
                                <h5 className="sub-title">
                                    Availablity
                                </h5>
                                <div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                            checked
                                        />
                                        <lable
                                        className="form-check-lable"
                                        htmlFor= ""
                                        >
                                            In Stock(1)
                                        </lable>
                                    </div>

                                    <div className="form-check">
                                        <input 
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                            // checked
                                        />
                                        <lable
                                        className="form-check-lable"
                                        for= ""
                                        >
                                            Out of Stock(0)
                                        </lable>
                                    </div>
                                </div>
                            </div>

                            <div>
                                 <h5 className="sub-title">
                                    Price
                                </h5>

                                <div className="d-flex align-items-center gap-10">
                                 <div class="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="floatingInput" 
                                        placeholder="From"
                                    />
                                    <label 
                                        htmlFor="floatingInput1"
                                    >
                                        From
                                    </label>
                                </div>
                                <div class="form-floating mb-3 ">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="floatingInput" 
                                        placeholder="To"
                                    />
                                    <label 
                                        htmlFor="floatingInput2"
                                    >
                                        To
                                    </label>
                                </div>
                                </div>
                            </div>

                            <div>
                                <h5 className="sub-title">
                                    Colors
                                </h5>

                                <Color/>
                            </div>

                            <div>
                                <h5 className="sub-title">
                                    Size
                                </h5>

                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                        checked
                                    />
                                    <lable
                                        className="form-check-lable"
                                        htmlFor= "size-1"
                                    >
                                        S(1)
                                    </lable>
                                </div>

                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                        checked
                                    />
                                    <lable
                                        className="form-check-lable"
                                        htmlFor= "size-2"
                                    >
                                        M(1)
                                    </lable>
                                </div>

                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                        checked
                                    />
                                    <lable
                                        className="form-check-lable"
                                        htmlFor= "size-3"
                                    >
                                        L(1)
                                    </lable>
                                </div>

                            </div>
                           
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Product Tags
                            </h3>

                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Headphone
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Phone
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Laptop
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        LG
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Apple
                                    </span>

                                </div>
                            </div>
                        </div>

                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Random Product
                            </h3>

                            <div>
                                <div className="random-products mb-3 d-flex">
                                    <div className="w-50">
                                        <img className="img-fluid" 
                                            src="images/watch.jpg" alt="watch"
                                        />
                                    </div>

                                    <div className="w-50">
                                        <h5>Lorem ipsum</h5>
                                        <ReactStars
                                            count={5}
                                            // onChange={ratingChanged}
                                            size={24}
                                            value="3"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b className="price">LKR 100.00</b>
                                    </div>
                                </div>

                                <div className="random-products mb-3 d-flex">
                                    <div className="w-50">
                                        <img className="img-fluid" 
                                            src="images/watch.jpg" alt="watch"
                                        />
                                    </div>

                                    <div className="w-50">
                                        <h5>Lorem ipsum</h5>
                                        <ReactStars
                                            count={5}
                                            // onChange={ratingChanged}
                                            size={24}
                                            value="3"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b className="price">LKR 100.00</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="col-9">
                    <div className="filter-sort-grid mb-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-10">
                                <p className="mb-0 d-block" style={{width:100}}>
                                    Sort By:
                                </p>

                                <select
                                    className="form-control form-select"
                                    name=""
                                    defaultValue={"manual"}
                                    id=""
                                    >                                        
                                    <option value="manual">
                                        Featured
                                    </option>

                                    <option value="best-selling" selected="selected">
                                        Best selling
                                    </option>

                                    <option value="title-ascending">
                                        Alphabetically, A-Z
                                    </option>

                                    <option value="title-descending">
                                        Alphabetically, A-Z
                                    </option>

                                    <option value="price-ascending">
                                        Price, Low to High
                                    </option>

                                    <option value="price-descending">
                                        Price, High to Low 
                                    </option>

                                </select>

                    
                            </div>
                            <div className="d-flex align-items-center gap-10">
                                <p className="totalproducts mb-0">
                                    21 Products
                                </p>

                                <div className="grid d-flex gap-10 align-items-center">

                                    <img 
                                        onClick={() => {
                                            setGrid(3);
                                        }}
                                        className="d-block img-fluid" 
                                        src="images/gr4.svg" alt="grid"
                                    />

                                    <img 
                                        onClick={() => {
                                            setGrid(4);
                                        }}
                                        className="d-block img-fluid" 
                                        src="images/gr3.svg" alt="grid"
                                    />

                                    <img 
                                        onClick={() => {
                                            setGrid(6);
                                        }}
                                        className="d-block img-fluid" 
                                        src="images/gr2.svg" alt="grid"
                                    />

                                    <img 
                                        onClick={() => {
                                            setGrid(12);
                                        }}
                                        className="d-block img-fluid" 
                                        src="images/gr.svg" alt="grid"
                                    />

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="product-list pb-5">
                        <div className="d-flex gap-10 flex-wrap">
                            <ProductCart data={productState?productState:[]} grid={grid}/>
                        </div>
                       </div>

                </div>

                </div>
        </Container>
        </>
    )
};

export default OurStore;