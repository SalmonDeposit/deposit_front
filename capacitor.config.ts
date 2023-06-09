import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ovh.deposit',
  appName: 'Deposit',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    "hostname": "m.deposit.ovh",
    "androidScheme": "https"
  }
};

export default config;
