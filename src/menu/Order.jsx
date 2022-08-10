import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Order = () => {
    const [data, setData,] = useState([])
    const [inp, setInp] = useState('')
    const [reload, setReload] = useState(false);
    useEffect(() => {
        axios.get("https://62a1bfcbcc8c0118ef53af17.mockapi.io/api/v1/post")
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [reload])
    const ochirvor = (id) => {
        axios.delete(`https://62a1bfcbcc8c0118ef53af17.mockapi.io/api/v1/post/${id}`)
            .then(res => setReload(!reload))
            .catch(err => console.log('err'))
    }
    return (
        <div>
            {
                data.map((x, i) => {
                    return (
                        <div className='map' key={i}>
                            <div className="h1">
                                <div className="names">
                                <h1>{x.email}</h1>
                                <h2>{x.phone}</h2>
                                </div>
                            <button onClick={() => ochirvor(x.id)}>delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Order;