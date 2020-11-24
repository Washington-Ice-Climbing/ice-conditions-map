import { Layout } from "antd";
const { Footer } = Layout
import Link from "next/link";

export default function PageFooter() {
    return (
        <Footer
            style={{ textAlign: 'center', backgroundColor: 'white'}}>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
                <div className="footer-item">
                    <Link href="/" as={`/`}>
                        <a>Home</a>
                    </Link>
                </div>
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
                <div style={{flexGrow: '1'}}>
                    <img src="/icons/favicon-black.png" style={{height: '40px'}}/>
                </div>
                <div className="footer-item">
                    Created by Kyle McCrohan ©2020
                </div>

            </div>
            <style jsx>{`
                .footer-item {
                    flex-grow: 0;
                    margin: 0px 15px 0px 15px;
                }
            `}</style>
        </Footer>
    )
}