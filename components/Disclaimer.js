import { Layout, Typography } from "antd";
const { Title } = Typography;
const { Content } = Layout;

export default function Disclaimer() {
    return (
        <Content>
            <Title>Disclaimer</Title>
            <p>
                <i>
                    Ice climbing is a very dangerous activity.
                    There are many hazards,
                    including but not limited to exposure to the elements, falling, and avalanches.
                    This information is based on limited field observations and by no means should
                    be taken as truth.
                    You acknowledge that partaking in the activities described here could result in injury or death.
                    You assume all risks for the related activities.
                    This guide assumes no responsibility for accidents
                    or losses resulting from these activities. This guide is not a replacement for professional
                    training. One should seek professional advice or guidance before climbing these routes.
                </i>
            </p>
        </Content>
    )
}