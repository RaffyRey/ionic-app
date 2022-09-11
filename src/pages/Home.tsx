import {
	IonCard,
	IonCardContent,
	IonContent,
	IonHeader,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Button, Modal } from '../components';

const Home: FC = () => {
	const [persons, setPersons] = useState([]);
	const [showModal, setModal] = useState<boolean>(false);

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'http://10.0.2.2:5000/',
		};

		axios.request(options).then((response) => {
			setPersons(response.data.data);
		});
	}, []);

	// add user button
	const addUser = () => {
		setModal(true);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle slot='start'>Persons Data</IonTitle>
					<Button onClick={addUser} />
				</IonToolbar>
			</IonHeader>
			{/* page content */}
			<IonContent fullscreen scroll-y='true'>
				{persons.map((person: any) => (
					<IonCard key={person.person_id}>
						<IonCardContent
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							{/* card data */}
							<PersonCardData cardLabel='Lastname' cardData={person.lastname} />
							<PersonCardData cardLabel='Firstname' cardData={person.firstname} />
							<PersonCardData cardLabel='Age' cardData={person.age} />
						</IonCardContent>
					</IonCard>
				))}
			</IonContent>
			<Modal
				isOpen={showModal}
				onCloseModal={() => {
					window.location.reload();
					setModal(false);
				}}
			/>
		</IonPage>
	);
};

interface cardProps {
	cardLabel: string;
	cardData: string;
}

const PersonCardData: FC<cardProps> = ({ cardData, cardLabel }) => {
	return (
		<IonText
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				width: '100%',
			}}
			color='dark'>
			<h1>{cardLabel}:</h1>
			<p>{cardData}</p>
		</IonText>
	);
};

export default Home;
