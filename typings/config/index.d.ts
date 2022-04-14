import type { Settings } from '@ant-design/pro-layout';

declare module '@config/setting' {
  export type defaultSettingsType = Settings & {
    pwa?: boolean;
    logo: string;
    /** 阿里图标库的远程链接 */
    aliFonts?: string[]
  };
}
