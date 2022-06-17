// @ts-ignore
import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import ProCard from '@ant-design/pro-card';
import Flex from '@/components/Flex';
import { PlusOutlined } from '@ant-design/icons';
import type { PropsWithChildren } from 'react'
import type { CardProps } from 'antd';
import { FloatListFn } from '@/components/FloatList';
import { getMaterialList } from '@/services/mockTest/material.service';
import { MaterialEntity } from 'typings/entity/material';
import { } from 'ahooks'
import TitleIcon from './common/TitleIcon';

export interface MaterialProps extends GlobalComponentsPropsType {

};


const defaultProCardProps: PropsWithChildren<CardProps> = { style: { minWidth: 300, maxWidth: 500, height: 200, cursor: 'pointer', flex: 1 }, hoverable: true }

/** 我的项目页面  */
const Material: React.FC<MaterialProps> = (props) => {

    const [materialList, setMaterialList] = useState<MaterialEntity[]>([])
    const [loadState, setLoadState] = useState<boolean>(true)


    useEffect(() => {
        getMaterialList().then(res => {
            setMaterialList(res.data)
        }).finally(() => setLoadState(false))

        return () => {
        }
    }, [])


    return <div className={classNames({ [props.className || '']: true })}>
        <PageContainer
            extra={[
                <Button key="1" type="primary">
                    多选
                </Button>,
            ]}
            loading={loadState}
        >
            <Flex gutter={15} FW={'wrap'}>

                {
                    FloatListFn(materialList,
                        (item) => <ProCard
                            {...defaultProCardProps}
                            key={item.id}
                            title={<TitleIcon {...item} />}
                        />)
                }

                <ProCard {...defaultProCardProps} layout={'center'}>
                    <PlusOutlined style={{ fontSize: 34 }} />
                </ProCard>
            </Flex>



        </PageContainer>
    </div>
}

export default Material    