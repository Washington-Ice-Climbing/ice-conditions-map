import Topbar from "../../components/Topbar";
import Router from 'next/router'
import { Layout, Breadcrumb, Col, Row} from "antd";
import PageFooter from "../../components/Footer";
import RouteStats from "../../components/RouteStats";
import RouteIntro from "../../components/RouteIntro";
import RouteBeta from "../../components/RouteBeta";
import RouteLinks from "../../components/RouteLinks";
import RouteHistory from "../../components/RouteHistory";
import RoutePhotos from "../../components/RoutePhotos";
import { RouteObject } from "../../objects/RouteObject"
import fs from 'fs'
import path from 'path'
import { routes } from '../../static/routes/routes'
import { addRouteLinks } from "../../utils/RouteUtil";

const { Content } = Layout;

export default function Route({data}) {

    const route = new RouteObject(data)
    return (
        <div>
            <Topbar onBack={() => Router.back()} title={route.name} subTitle={route.peak}/>
            <Layout style={{paddingTop: '64px'}} className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Routes</Breadcrumb.Item>
                        <Breadcrumb.Item>{route.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{padding: '10px', maxWidth: '1500px', margin: '0 auto'}}>
                        <Row gutter={16}>
                            <Col span={8} md={8} sm={12} xs={24} style={{margin: '8px 0px'}}>
                                <RouteStats route={route}/>
                            </Col>
                            <Col span={8} md={8} sm={12} xs={24} style={{margin: '8px 0px'}}>
                                <RouteIntro route={route}/>
                            </Col>
                            <Col span={8} md={8} sm={12} xs={24} style={{margin: '8px 0px'}}>
                                <RoutePhotos route={route}/>
                            </Col>
                        </Row>
                        <RouteBeta route={route}/>
                        <Row gutter={16} style={{paddingBottom: '8px'}}>
                            <Col span={16} md={16} sm={16} xs={24} style={{margin: '8px 0px'}}>
                                <RouteHistory route={route}/>
                            </Col>
                            <Col span={8} md={8} sm={8} xs={24} style={{margin: '8px 0px'}}>
                                <RouteLinks route={route}/>
                            </Col>
                        </Row>
                    </Content>
                </Content>
                <PageFooter/>
            </Layout>
        </div>
    )
}

// Props created at build time for static rendering.
export async function getStaticProps({ params }) {
    const filtered = routes.filter(r => params.rid === r.rid)
    const route = addRouteLinks(filtered[0])
    const routeDir = path.join(process.cwd(), route.routeDir)

    // can have a story or not
    let story = null;
    try {story = fs.readFileSync(path.join(routeDir, 'story.html'), 'utf8')} catch(e) { null; }

    route.content = {
        intro: fs.readFileSync(path.join(routeDir, 'intro.html'), 'utf8'),
        beta: {
            approach: fs.readFileSync(path.join(routeDir, 'approach.html'), 'utf8'),
            climb: fs.readFileSync(path.join(routeDir, 'climb.html'), 'utf8'),
            descent: fs.readFileSync(path.join(routeDir, 'descent.html'), 'utf8'),
            gear: fs.readFileSync(path.join(routeDir, 'gear.html'), 'utf8'),
            conditions: fs.readFileSync(path.join(routeDir, 'conditions.html'), 'utf8')
        },
        extra: {
            history: fs.readFileSync(path.join(routeDir, 'history.html'), 'utf8'),
            story: story,
            links: fs.readFileSync(path.join(routeDir, 'links.html'), 'utf8')
        }
    }

    route.imgs = fs.readdirSync(path.join(routeDir, 'imgs')).map(f => path.join(route.routeDir, "imgs", f))

    return {
        props: {data: route}
    }
}

// Define which paths will be statically build at build time.
export async function getStaticPaths() {
    return {
        paths: routes.map(r => ({ params: { rid: r.rid } })),
        fallback: false // show 404 error if route page not found
    };
}