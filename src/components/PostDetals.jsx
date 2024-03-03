import React, { useContext, useState } from "react";
import { Store } from "../store/Store";
import { Input, List, Card} from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "../App.scss";


function PostDetals() {
  const { post } = useContext(Store);
  const[filterData, setFilterData] = useState(post.PostOffice)


const handleFilter = (e)=>{
let searchItem = e.target.value.toLowerCase();
const newData = post.PostOffice.filter((item)=>(
  item.Name.toLowerCase().includes(searchItem)
))
   setFilterData(newData)
}



  return (
    <div className="postContainer">
      {filterData && (
        <>
          <h3>{`Pincode : ${post.PostOffice[0].Pincode}`}</h3>
          <div>
            <span className="message">Message : </span> {post.Message}
          </div>
          <div className="filter-bx">
            <Input
              type="text"
              placeholder="Filter"
              prefix={<SearchOutlined />}
              onChange={handleFilter}
            />
          </div>
          <CardList Cards={filterData} />
        </>
      )}
    </div>
  );
}

export default PostDetals;

const CardList = ({Cards}) => {

  return(
    <div className="cardContainer">

   {
    Cards.map((card, index) => {
      return(
        <Card
          key={index}
          title={card.Name}
          style={{
            width: 300,
            height: 300,
          
          
          }}
          
        >
         <p> <span className="info">Name : </span> {card.Name} </p>
         <p> <span className="info">Branch Type : </span> {card.BranchType}</p>
         <p> <span className="info">Delivery Status : {card.DeliveryStatus}</span></p>
         <p> <span className="info">District : {card.District}</span></p>
         <p> <span className="info">State : {card.State}</span></p>
        </Card>
      )
    })
   }

  </div>
  )
 
};
