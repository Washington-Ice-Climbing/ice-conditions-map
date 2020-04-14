import {Card, Layout, Tooltip} from 'antd';
import Stars from "./Stars";

const { Content } = Layout;

export default function RouteStats({route}) {
    const contributors = route.contributors.map(c =>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '5px'}}>
            <p>{c.getAvatar('large')}<i> Contributed by {c.name}</i></p>
        </div>
    )
    return (
        <Card style={{height: '100%'}}>
            <Content>
                <h2>Route Stats</h2>
                <Stars numStars={route.stars} style={{position: 'absolute', top: '30px', right: '30px', zIndex: '1'}}/>
                <RouteStat stat="Difficulty" value={route.difficulty} info="Overall measure of route difficulty"/>
                <RouteStat stat="Technical Grade" value={route.grade} info="Grade of route crux"/>
                <RouteStat stat="Length" value={route.length} info="Height of technical portion of route"/>
                <RouteStat stat="Commitment" value={route.commitment} info="Reflects difficulty to bail, length, etc"/>
                <RouteStat stat="Avalanche Hazard" value={route.avalanche} info="Overall measure of avalanche hazard"/>
                <RouteStat stat="Approach" value={route.approachTime} info="Estimated approach time in normal conditions"/>
                <RouteStat stat="Region" value={route.region} info="General region of access for climb"/>
                <RouteStat stat="Season" value={route.season} info="Normal time of year to climb the route"/>
                <RouteStat stat="FA" value={route.fa} info="First ascent information"/>
                {contributors}
            </Content>
        </Card>
    )
}

function RouteStat({stat, value, info}) {
    return (
        <p>
            <Tooltip title={info}>
                <b>
                    {stat}
                </b>
            </Tooltip>
            : {value}
        </p>
    )
}