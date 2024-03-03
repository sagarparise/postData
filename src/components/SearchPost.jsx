import React, { useContext, useState } from 'react'
import {Input, Button,notification, Spin} from 'antd'
import {SearchOutlined } from '@ant-design/icons'
import '../App.scss'
import { Store } from '../store/Store'
import { useNavigate } from 'react-router-dom'
function SearchPost() {
  const [api, contextHolder] = notification.useNotification();
 const navigate = useNavigate()
const [loader, setLoader] = useState(false)
 const[inputval, setInputval] = useState()
 const{setPost, post }= useContext(Store)
  const searchHandle = async()=>{
    if(inputval.length > 6)
    {
      alert('plaese enter 6 digit of postal code')
    }
    try {
      setLoader(true)
      const res = await fetch(`https://api.postalpincode.in/pincode/${inputval}`);
      const data = await res.json();
     setLoader(false)
      setPost(data[0])
      console.log(data[0])

      if(data[0].Status === 'Success'){
        api['success']({
          message: 'Post has been retrieved successfully',
        
        })
       setTimeout(()=>{
          navigate('/post')
       },800)
      }
      else{
        console.log('failed to fetch')
        api['error']({
          message: "Couldn’t find the postal data you’re looking for…",
          
        })
      }

     
     
      setInputval('')

    } catch (err) {
      api['error']({
        message: "Couldn’t find the postal data you’re looking for…",
        
      });
      setInputval('')
    }
   
  }


  const example = {
    height: '100%',
   width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
    
   

  }
  return (<>

    <div className='container'>
        {contextHolder}
      <div className='search-bx'>
        <Input type='number' value={inputval} placeholder='Enter Pincode here' onChange={(e)=> setInputval(e.target.value)} suffix={<SearchOutlined />}/>
        <Button className='btn' onClick={searchHandle}>Lookup</Button>
      </div>
      {
  loader &&  <div style={example}>
    <Spin tip="Loading..." size='large' >
    
    </Spin>
  </div>
  }

    </div>
    </>
  )
}

export default SearchPost