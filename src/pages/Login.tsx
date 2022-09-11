import {
	IonButton,
	IonContent,
	IonGrid,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonRow,
	IonText,
} from '@ionic/react';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login: FC = () => {
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const history = useHistory();

	const onLogin = () => {
		if (!email || !password) {
			alert('please fill out the login form');
		} else {
			history.push('/home');
		}
	};

	return (
		<IonContent>
			<IonGrid className='ion-justify-content-center'>
				{/* row header */}
				<IonRow className='ion-justify-content-center ion-margin-top ion-margin-bottom'>
					<IonText color='primary'>
						<h1>Login</h1>
					</IonText>
				</IonRow>
				{/* login form row */}
				<IonList className='ion-margin-bottom'>
					<LoginFormInput
						label='Email'
						inputPlaceholder='example@email.com'
						inputValue={email}
						inputType='email'
						inputOnChange={(e: any) => setEmail(e.detail.value)}
					/>

					<LoginFormInput
						label='Password'
						inputPlaceholder='******'
						inputValue={password}
						inputType='password'
						inputOnChange={(e: any) => setPassword(e.detail.value)}
					/>
				</IonList>
				<IonRow className='ion-justify-content-center ion-margin ion-margin-top'>
					<IonButton
						onClick={onLogin}
						expand='full'
						shape='round'
						color='primary'
						mode='md'
						style={{ width: '100%' }}
						disabled={!email || !password ? true : false}>
						Login
					</IonButton>
				</IonRow>
			</IonGrid>
		</IonContent>
	);
};

interface inputProps {
	label: string;
	inputType: any;
	inputPlaceholder: string;
	inputValue: any;
	inputOnChange: EventListener;
}

const LoginFormInput: FC<inputProps> = ({
	label,
	inputType,
	inputPlaceholder,
	inputOnChange,
	inputValue,
}) => {
	return (
		<IonItem lines='none'>
			<IonLabel position='fixed' color='primary'>
				{label}
			</IonLabel>
			<IonInput
				type={inputType}
				placeholder={inputPlaceholder}
				style={{ borderBottom: '1px solid #e6e6e6' }}
				value={inputValue}
				onIonChange={inputOnChange}
			/>
		</IonItem>
	);
};

export default Login;
