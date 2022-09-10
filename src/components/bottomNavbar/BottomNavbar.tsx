import { IonTabBar, IonTabs } from '@ionic/react';
import React, { FC } from 'react';

const BottomNavbar: FC = () => {
	return (
		<IonTabs>
			<IonTabBar slot='bottom'></IonTabBar>
		</IonTabs>
	);
};

export default BottomNavbar;
