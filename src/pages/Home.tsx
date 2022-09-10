import {
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'http://10.0.2.2:5000/',
		};

		axios.request(options).then((response) => {
			setPersons(response.data.data);
			console.log(response.data.data[0]);
		});
	}, []);

	console.log(persons);

	return (
		<IonPage>
			<IonContent fullscreen>
				<IonList>
					{persons.map((person: any) => (
						<IonItem key={person.person_id}>
							<IonLabel>{person.firstname}</IonLabel>
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Home;
