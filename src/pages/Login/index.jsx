import React,{useState} from 'react'
import styled from 'styled-components'
import { Pane, TextInput, Button, Heading } from 'evergreen-ui'
import background from './../../assets/images/background.jpg';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	background-image: url(${background});
	background-repeat: no-repeat;
	background-size: cover;
`
const FormContainer = styled(Pane)`
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Title = styled(Heading)`
	margin-bottom: 50px;
	color: white;
`
const Input = styled(TextInput)`
	width: 100%;
	margin-bottom: 10px;
	height: 40px;
`
const Btn = styled(Button)`
	width: 100%;
	margin-bottom: 20px;
	height: 40px;
	display: flex;
	justify-content: center;
`

function Login (){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const FormElement= (
		<FormContainer>
			<Title size={800} marginTop="default">MOVIES</Title>
			<Input
				name="text-input-email"
				placeholder="Enter your Email"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<Input
				name="text-input-password"
				placeholder="Enter your Password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<Btn appearance="primary" onClick={() => { console.log(`Email: ${email}, Password: ${password}`) }}>Sign in</Btn>
		</FormContainer>
	)

	return(
		<Wrapper>
			{FormElement}
		</Wrapper>
	)
}

export {Login}