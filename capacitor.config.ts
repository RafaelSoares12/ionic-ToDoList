import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'to-do-list',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
