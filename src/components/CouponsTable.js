import React from 'react';
const CouponsTable=(props)=>{
    const {setEditMode,deleteCoupon,edit,coupons}=props;
//    const handleEdit=(user)=>{
//     //e.preventDefault();
//     setEditMode(true)
//    };
//    const handleDelete=(e,id)=>{
//       console.log("",e.target.name);
//       // deleteUser(id);
     
//    }
const handleButtonClick=(e,coupon)=>{
    e.preventDefault();
    switch (e.target.name) {
    case 'edit':
        setEditMode(coupon);
        break;
    case 'delete':
        deleteCoupon(coupon.id);
        break;
    
    }
}
 return (
    <table>
        <thead>
            <tr>
            <th>
                Name
            </th>
            <th>
                Percent_Off
            </th>
            <th>
                Edit
            </th>
            <th>
                Delete
            </th>
            </tr>
        </thead>
        <tbody>
            {
                coupons.map(coupon=>(
                    <tr key={coupon.id}>
                        <td>{coupon.name}</td>
                        <td>{coupon.percent_off}</td>
                        <td>
                        <button onClick={(e)=>{handleButtonClick(e,coupon)}} className='button muted-button' name='edit'>Edit
                        </button>
                        </td>
                        <td> 
                        <button onClick={(e)=>{handleButtonClick(e,coupon)}} className='button muted-button' name='delete'>Delete
                        </button></td>
                    </tr>
                ))
            }
        </tbody>
    </table>);
}
export default CouponsTable;