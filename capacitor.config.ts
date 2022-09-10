import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'io.ionic.starter',
	appName: 'ionic-app',
	webDir: 'build',
	bundledWebRuntime: false,
	server: {
		hostname: 'http://localhost:8104/',
		cleartext: true,
		allowNavigation: ['*'],
	},
};

export default config;
