import {
	IonButton,
	IonHeader,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonModal,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import axios from 'axios';
import React, { FC, useState } from 'react';

interface modalProps {
	isOpen: boolean;
	onCloseModal: () => void;
}

const Modal: FC<modalProps> = ({ isOpen, onCloseModal }) => {
	const [lastname, setLastname] = useState<string>();
	const [firstname, setFirstname] = useState<string>();
	const [age, setAge] = useState<number>(0);

	const onSubmit = async () => {
		await axios({
			method: 'post',
			url: 'http://10.0.2.2:5000/',
			data: {
				lastname,
				firstname,
				age,
			},
		})
			.then((response) => {
				alert(response);
			})
			.catch((error) => {
				alert(error);
			});
		setLastname('');
		setFirstname('');
		setAge(0);
	};

	return (
		<IonModal isOpen={isOpen}>
			{/* Modal header */}
			<IonHeader>
				<IonToolbar>
					<IonTitle slot='start'>Add New Person</IonTitle>
					<IonButton slot='end' onClick={onCloseModal}>
						Close modal
					</IonButton>
				</IonToolbar>
			</IonHeader>
			{/* Modal form */}
			<IonList>
				<AddPersonInput
					inputLabel='Last name'
					inputType='text'
					inputValue={lastname}
					onChange={(e: any) => setLastname(e.detail.value)}
				/>
				<AddPersonInput
					inputLabel='First name'
					inputType='text'
					inputValue={firstname}
					onChange={(e: any) => setFirstname(e.detail.value)}
				/>
				<AddPersonInput
					inputLabel='Last name'
					inputType='number'
					inputValue={age}
					onChange={(e: any) => setAge(e.detail.value)}
				/>
				<IonButton
					color='primary'
					expand='full'
					shape='round'
					mode='md'
					onClick={onSubmit}
					style={{ marginTop: '1rem' }}>
					Add Person
				</IonButton>
			</IonList>
		</IonModal>
	);
};

interface addUserInputProps {
	inputLabel: string;
	inputType: any;
	inputValue: any;
	onChange: EventListener;
}

const AddPersonInput: FC<addUserInputProps> = ({
	inputLabel,
	inputType,
	inputValue,
	onChange,
}) => {
	return (
		<IonItem>
			<IonLabel>{inputLabel}</IonLabel>
			<IonInput type={inputType} value={inputValue} onIonChange={onChange} />
		</IonItem>
	);
};

export default Modal;
