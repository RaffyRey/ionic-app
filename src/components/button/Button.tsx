import { IonButton } from '@ionic/react';
import React, { FC } from 'react';

interface ButtonPropType {
	onClick: () => void;
}

const Button: FC<ButtonPropType> = ({ onClick }) => {
	return (
		<IonButton slot='end' onClick={onClick}>
			Add user
		</IonButton>
	);
};

export default Button;
