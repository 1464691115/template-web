import { Layout } from "antd";

export interface MaterialInfoProps {
    readonly a: string
}

const { Header, Footer, Sider, Content } = Layout;

const MaterialInfo: React.FC<MaterialInfoProps> = (props) => {

    return <Layout>
        <Sider>Sider</Sider>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    </Layout>
}

export default MaterialInfo    