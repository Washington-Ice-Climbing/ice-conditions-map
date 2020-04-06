import { Layout } from "antd";
import theme from '../styles/theme'
const { Footer } = Layout

export default function PageFooter() {
    return (
        <Footer
            style={{ textAlign: 'center', backgroundColor: 'white'}}>
            Created by Kyle McCrohan and Daniel Smith ©2020
        </Footer>
    )
}