// @ts-ignore
import React, { useEffect, useMemo } from 'react'
import type { CSSProperties } from 'react'
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { createFromIconfontCN } from '@ant-design/icons';
import { MaterialEntity } from 'typings/entity/material';
import setting from '@config/setting';

export interface TitleIconProps extends GlobalComponentsPropsType, Pick<MaterialEntity, 'maType' | 'title'> {
    style?: CSSProperties;

};

const IconFont = createFromIconfontCN({
    scriptUrl: setting.aliFonts
});


/** 我的项目卡片标题 */
const TitleIcon: React.FC<TitleIconProps> = (props) => {
    if (props.if === false) return <></>

    const MaTypeMemo = useMemo(() => props.maType || 'React', [])

    return <Flex gutter={[0, 10]} AI={'center'}>
        <IconFont type={`icon-${MaTypeMemo}`} style={{ fontSize: 45 }} />
        <Text>{props.title}</Text>
    </Flex>
}

export default TitleIcon