import { IonButton } from '@ionic/react';
import React, { FC } from 'react';

interface ButtonPropType {
	clicked: () => void;
}

const Button: FC<ButtonPropType> = ({ clicked }) => {
	return <IonButton onClick={clicked}>Button</IonButton>;
};

export default Button;
