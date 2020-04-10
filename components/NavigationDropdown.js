import { Menu } from 'antd';
import MoreDropdown from "./MoreDropdown";
import Link from "next/link";

export default function NavigationDropdown({options}) {
    const home = !options.includes("home") ? null :
        (
            <Menu.Item key="1">
                <Link href="/" as={`/`}>
                    <a>Home</a>
                </Link>
            </Menu.Item>
        )
    const routes = !options.includes("routes") ? null :
        (
            <Menu.Item key="2">
                <Link href="/routes" as={`/routes`}>
                    <a>Browse Routes</a>
                </Link>
            </Menu.Item>
        )
    const map = !options.includes("map") ? null :
        (
            <Menu.Item key="1">
                <Link href="/map" as={`/map`}>
                    <a>View Map</a>
                </Link>
            </Menu.Item>
        )
    const dropdownMenu = (
        <Menu>
            {home}
            {routes}
            {map}
        </Menu>
    )
    return <MoreDropdown key="1" menu={dropdownMenu}/>;
}