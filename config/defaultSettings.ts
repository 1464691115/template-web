import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 好看绿
  primaryColor: '#61BFAD',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'SenSWB',
  pwa: false,
  logo: '../public/logo.svg',
  iconfontUrl: '',
};

export default Settings;
