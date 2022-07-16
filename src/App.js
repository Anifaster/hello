// import React, { useState } from 'react';
// import axios from 'axios'
// const Telegram = () => {
//   const [inp, setInp] = useState('')
//   const [task, setTask] = useState('')
//   const [reload, setReload] = useState(false);
//   const [data, setData] = useState([])
//   const post = () =>{
//     axios.post("https://62a1bfcbcc8c0118ef53af17.mockapi.io/api/v1/post", {
//       name: inp,
//       message: task,
//     })
//     .then(res => console.log('your message was posted'))
//     .catch(err => console.log(err))
//   }
//   useEffect(() => {
//     axios.get("https://62a1bfcbcc8c0118ef53af17.mockapi.io/api/v1/post")
//          .then(res => setData(res.data))
//          .catch(err => console.log(err))

// }, [reload])
//   return ( 
//     <div>
//       <input type='text' onChange={(e) => setInp(e.target.value)}/>
//       <textarea onChange={(e) => setTask(e.target.value)}></textarea>
//       <button onClick={post}>отправить/jo'natish</button>
//     </div>
//    );
// }
 
// export default Telegram;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Issekai = () => {
    const [inp, setInp] = useState('')
    const [task, setTask] = useState('')
    const [data, setData,] = useState([])
    const [reload, setReload] = useState(false);
    const post = () =>{
        axios.post('https://62a1bfcbcc8c0118ef53af17.mockapi.io/api/v1/telegram', {
            name: inp,
            message: task,
        })
        .then(reas => console.log('your messege was posted'))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get("https://62a1bfcbcc8c0118ef53af17.mockapi.io/api/v1/telegram")
             .then(res => setData(res.data))
             .catch(err => console.log(err))
    
    }, [reload])
    const ochirvor = (id) =>{
        axios.delete(`https://62a1bfcbcc8c0118ef53af17.mockapi.io/api/v1/telegram/${id}`)
        .then(res => setReload(!reload))
        .catch(err => console.log('err'))
      }
    return ( 
        <div>

        <div  className='review'>
            <h2>Напиши своё имя:</h2>
            <input type='text' onChange={(e) => setInp(e.target.value) }/>
            <h2>Напиши свой смс</h2>
            <textarea onChange={(e) => setTask(e.target.value)}></textarea>
            <button onClick={post}>click</button>
        </div>
            <div >
            {
                data.map((x, i) =>{
                    return(
                        <div key={i  } className='messages'>
                            <h2>{x.name}</h2>
                            <h1>{x.message}<br/>     <button onClick={ () => ochirvor(x.id)}>delete</button></h1>
                           
                           
                        </div>
                    )
                })
            }
            </div>
        </div>
     );
}
 
export default Issekai;