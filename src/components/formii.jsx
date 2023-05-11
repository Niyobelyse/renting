// import React, { useState } from "react";

// const Formiii = () => {
//  const [data, setData] = useState({
//     name: "",
//     bio: ""
//  })
//  const handle =(e) => {
//     const info = {...data, [e.target.name]: e.target.value }
//     setData(info)
//  }

// const handleSubmit = (e) => {
//  e.preventDefault();
//  console.log(data)
// }
//     return (
//         <form onSubmit={handleSubmit}>
//             <p>My Form</p>
//             <input type="text" onChange={handle} name="name" class="border-2 border-green-600"/>
//             <input type="text" onChange={handle}  name="bio" class="border-2 border-green-500" />
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// export default Formiii;