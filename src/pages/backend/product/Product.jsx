/* eslint-disable jsx-a11y/anchor-is-valid */
import BackendLayout from "../../../components/layouts/backend/BackendLayout";
import api from '../../../services/productAPI'
import {useState, useEffect} from 'react'

   
    

const Product = () => {

    //==========================================================================
    // ส่วนของการอ่านข้อมูลจาก API
    //==========================================================================
    // สร้างตัวแปรมารับข้อมูลที่อ่านจาก API
    const [products, setProducts] = useState([])

    useEffect(() => {
      api.getAllProduct().then(res => {
        //console.log(res.data)
        setProducts(res.data)
      })
    }, [])

  return (
    <BackendLayout title="Product">
      <div>
        <h1 className="h3 mb-3">Product List</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Barcode</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        products.map((products, index) => (
                        <tr key={index}>
                            <td><img src={products.product_image} width={48} height={48} className="rounded-circle mr-2" alt="Avatar" /></td>
                            <td>{products.product_name}</td>
                            <td>{products.product_barcode}</td>
                            <td>{products.product_price}</td>
                            <td>{products.product_date}</td>
                            <td className="text-right" style={{width:'200px'}}>
                                <a href="#" className="btn btn-sm btn-warning">Edit</a>&nbsp;
                                <a href="#" className="btn btn-sm btn-danger">Delete</a>
                            </td>
                        </tr>
                        ))
                        }
                    </tbody>
                </table>
              </div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </BackendLayout>
  );
};

export default Product;