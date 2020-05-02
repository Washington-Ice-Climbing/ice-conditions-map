import Head from 'next/head'
import Disclaimer from "../components/Disclaimer";
import React from "react";
import {Layout} from 'antd';
const { Content } = Layout;

export default function Tos() {
    return (
        <div>
            <Head>
                <title>Cascade Ice</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout style={{margin: '30px'}}>
                <Content style={{backgroundColor: 'white'}}>
                    <Disclaimer/>
                </Content>
            </Layout>
        </div>
    )
}