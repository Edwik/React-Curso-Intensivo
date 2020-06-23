import React, {useState} from 'react'
import {connect} from 'react-redux'
import CreateUser from './../../redux/actions/user.actions'

const Home = ({USER_RESPONSE, CreateUser})=>{

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddres] = useState('');

  return(
      <div>
          Crea tu usuario haciendo click en el siguiente boton.
          
          <input
				name="text-input-name"
				placeholder="Enter your Name"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
            <input
				name="text-input-phone"
				placeholder="Enter your Phone"
				value={phone}
				onChange={e => setPhone(e.target.value)}
			/>
            <input
				name="text-input-address"
				placeholder="Enter your Addres"
				value={address}
				onChange={e => setAddres(e.target.value)}
			/>


          <button value="Submit" onClick={ ()=>{CreateUser({ 
              name,
              phone,
              address,
          })} } />

          Tus datos actiales son:
          name: {USER_RESPONSE.name}
          phone: {USER_RESPONSE.phone}
          address: {USER_RESPONSE.address}

      </div>
  )
}

const mapStateToProps = (state, props) => {
	return {
		USER_RESPONSE: state.userRededucers.UserResponse
	}
}

export default connect( mapStateToProps, {CreateUser} )(Home)