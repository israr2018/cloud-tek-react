import React from 'react';
import axios from 'axios';
import CouponsTable from './components/CouponsTable';
import NewCouponForm from './components/NewCouponForm';
import EditCouponForm from './components/EditCouponForm';

function App() {
  const remotebaseUrl="https://cloud-tek-api.herokuapp.com/api/stripe/coupons";
  const localbaseUrl="http://localhost:8080/api/stripe/coupons/";
  const [isLoading,setIsLoading]=React.useState(true);
  const [edit,setEdit]=React.useState(false);
  // const [users,setUsers]=React.useState(users_data);
   const [coupons,setCoupons]=React.useState([]);
  const initCurrentCoupon={id:null,name:""};
  const [currentCoupon,setCurrentCoupon]=React.useState(initCurrentCoupon);
  
  React.useEffect(() => {
    // axios.get('http://localhost:8080/api/stripe/coupons').then(result=>{
     
    //   const coupon_list=result.data.data.data;
    //   console.log("coupon_list:"+JSON.stringify(coupon_list));
    //   console.log("length:"+coupon_list.length);
    //   setCouponCout(coupon_list.length);
    //   setIsLoading(false);
    //  setCoupons(coupon_list);
     
    // })
    getCoupons();
  }, [])
 const getCoupons=()=>{
   setIsLoading(true);
   axios.get(remotebaseUrl).then(result=>{
    const coupon_list=result.data.data.data;
    setCoupons(coupon_list);
    setIsLoading(false);
   })
 }
  const addCoupon=(new_coupon)=>{
  // new_user.id=users.length+1;
   //setCoupons([...coupons,new_coupon]);
  //  const payload={};
  //  payload["metadata"]=new_coupon;
    console.log("new_coupon:"+JSON.stringify(new_coupon));
    axios.post(remotebaseUrl,new_coupon).then(coupon=>{
    getCoupons();
   }).catch(err=>{
     console.log("err"+err);
   });
  };
  const cancelEditMode=()=>{
    
    setEdit(false);
  };
  const setEditMode=(coupon)=>{
    setEdit(true)
    console.log("currentCoupon",coupon);
   // setCurrentUser(user);
    setCurrentCoupon(coupon);
  };
 const deleteCoupon=(id)=>{
  //  let _users=users.filter((user)=>(user.id!==id));
  //  setUsers(_users);
  axios.delete(remotebaseUrl+id).then((deltetedCoupon)=>{
    getCoupons();
   }).catch((err)=>{
    getCoupons();
     //console.log("err:"+err);
   });
 };
 const updateCoupon=(coupon)=>{
   
   axios.put(remotebaseUrl,coupon)
   .then(updatedCoupon=>{
    
    getCoupons();
    cancelEditMode();
   })
   .catch(e=>{
     console.log("error in updating coupon"+e);
   });
  
 }
  return (
    
    <div className='container'>
      <h1> Strip Coupons with React</h1>
    <div className='flex-row'>
      
      <div className='flex-large'>
      
        {edit?
        (
        
         <EditCouponForm cancelEditMode={cancelEditMode} updateCoupon={updateCoupon} currentCoupon={currentCoupon}/>
        
        )
         :
         (
            
              <NewCouponForm addCoupon={addCoupon}/>
            
         )
        }

      </div>
      <div className="flex-large">
        <>
          <h2>View users</h2>
          {isLoading?(<div>Loading data</div>):
         (
           <CouponsTable   coupons={coupons} setEditMode={setEditMode} deleteCoupon={deleteCoupon} edit={edit} cancelEditMode={cancelEditMode}/>)
         }
           </>
      </div>
    </div>
   
    </div>
  );
}

export default App;
