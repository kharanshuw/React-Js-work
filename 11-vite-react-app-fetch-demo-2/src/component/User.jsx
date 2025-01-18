import React from 'react'

function UserCard(props) {

  console.log(props.userdata);
  

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 mt-3" >

      <img src={props.userdata.picture.large} alt="no img"  className="w-24 h-24 rounded-full mx-auto mb-4 text-center" />
      <h2 className="text-2xl font-bold mb-2 text-center" >{props.userdata.name.first}, {props.userdata.name.last}</h2>
      <p  className="text-gray-600 mb-2 text-center" >{props.userdata.phone}</p>
      <p className="text-gray-600 text-center" >{props.userdata.location.city},{props.userdata.location.country}</p>

    </div>
  )
}

export default UserCard;