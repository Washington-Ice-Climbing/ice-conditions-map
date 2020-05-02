import { Layout } from "antd";
const { Footer } = Layout
import Link from "next/link";

export default function PageFooter() {
    return (
        <Footer
            style={{ textAlign: 'center', backgroundColor: 'white'}}>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <div className="footer-item">
                    <a href="mailto:cascadeiceguide@gmail.com">Contact</a>
                </div>
                <div className="footer-item">
                    <a href="https://github.com/Washington-Ice-Climbing/ice-conditions-map" target="_blank">Source Code</a>
                </div>
                <div className="footer-item">
                    <Link href="/tos" as={`/tos`}>
                        <a>Disclaimer</a>
                    </Link>
                </div>
                <div style={{flexGrow: '1'}}/>
                <div className="footer-item">
                    Created by Kyle McCrohan and Daniel Smith ©2020
                </div>
            </div>
            <style jsx>{`
                .footer-item {
                    flex-grow: 0;
                    margin: 7px 15px 7px 15px;
                }
            `}</style>
        </Footer>
    )
}