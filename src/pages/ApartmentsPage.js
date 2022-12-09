import { useState, useEffect } from "react";
import axios from "axios";
 
function ApartmentsPage() {

  const [apartments, setApartments] = useState([]);

  useEffect(()=>{
    axios.get('https://ironbnb-m3.herokuapp.com/apartments')
   .then(axiosResponse => {
    console.log(axiosResponse.data)
    setApartments(axiosResponse.data)
   })
   .catch(err => console.log(err))
  }, [])
  
  return (
    <div>
      <h3>List of apartments</h3>
      {apartments.map(singleApt => {
        return (
            <div key={singleApt._id}>
                <img src={singleApt.img} alt="" />
                <h4>{singleApt.title}</h4>
                <h5>Price per day: {singleApt.pricePerDay}</h5>
            </div>
        )
      })}
    </div>
  );
}
 
export default ApartmentsPage;