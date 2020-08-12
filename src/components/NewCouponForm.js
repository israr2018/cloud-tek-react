import React  from 'react';

const NewCouponForm =(props)=>{
    const {addCoupon}=props;
    const INITIAL_VALUES={
       
        name:"",
        percent_off:null
    };
    const [coupon,setCoupon]=React.useState(INITIAL_VALUES);
    const handleSubmit=(e)=>{
        
        e.preventDefault();
         if(!coupon.name & !coupon.percent_off) return;
        addCoupon(coupon);
       
        console.log("initial_values:"+JSON.stringify(INITIAL_VALUES))
        setCoupon(INITIAL_VALUES);
    }
    const handleInputChange=(e)=>{
        // destructure the array and get name and value property
        console.log("e.target:"+e.target.name);
       const {name,value}=e.target;
       
       //create a new object from coupon ,and update its properties
       const new_coupon={...coupon,[name]:value};
        
       console.log("new_coupon:"+JSON.stringify(new_coupon));
       //set the new_use to user
       setCoupon(new_coupon);
      
    }
return (
    
    <form>
        <h2>Add New Coupon</h2>
        <p>
        <label>Name:</label>
        <input type='text' name='name' value={coupon.name} onChange={handleInputChange}></input>
        </p>
        <p>
        <label>Percent Off:</label>
        <input type='text' name='percent_off' value={coupon.percent_off} onChange={handleInputChange}></input>
        </p>
        <label>Duration:</label>
        <label>
        <input type="radio"   name="duration" value="once" onChange={handleInputChange}/>
        Once
        </label>
        <label>
        <input type="radio" name="duration" value="repeating" onChange={handleInputChange}/>
            repeating
        </label>
        <label>
        <input type="radio" name="duration" value="forever" onChange={handleInputChange}/>
            forever
        </label>
        <input type='submit' onClick={handleSubmit} value='Submit'/>
    </form>
);
}

export default NewCouponForm;