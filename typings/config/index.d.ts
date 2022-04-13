import type { Settings } from '@ant-design/pro-layout';

declare module '@config/setting' {
  export type defaultSettingsType = Settings & {
    pwa?: boolean;
    logo: string;
  };
}
