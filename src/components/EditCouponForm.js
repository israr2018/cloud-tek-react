import React,{useState,useEffect} from 'react'

const EditCouponForm= (props) =>{
    
    const {cancelEditMode,updateCoupon,currentCoupon}=props;
    const [editCoupon,setEditCoupon]=React.useState(currentCoupon);
    useEffect(()=>{
        setEditCoupon(currentCoupon);
    },[props])
    const handleButtonClick=(e)=>{
        console.log("handleButtonClick")
      e.preventDefault();
     switch (e.target.name) {
        
         case "submit":
            updateCoupon(editCoupon)
             
             break;
        case "cancel":
              console.log("cancel");
              cancelEditMode();
            break;
        case "name":
                   setEditCoupon({...editCoupon,[e.target.name]:e.target.value});
                   break;
        case "percent_off":
                    setEditCoupon({...editCoupon,[e.target.name]:e.target.value})
        break;
         
     }
    }
    return (
        
         <form>
            <h2>Edit Coupon</h2>
            <label>Name:</label>
            <input type='text' name='name' value={editCoupon.name} onChange={(e)=>{ handleButtonClick(e)}} />
            <label>Percent_Off:</label>
            <input type='text' name='percent_off' value={editCoupon.percent_off} onChange={(e)=>{ handleButtonClick(e)}}  />
            <button onClick={(e)=>{handleButtonClick(e)}} name="submit">Submit</button>
            <button onClick={(e)=>{handleButtonClick(e)}} name="cancel">Cancel</button>
        </form>
        );
        
}

export default EditCouponForm;