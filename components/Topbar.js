import {PageHeader} from 'antd';

export default function Topbar(props) {
    return (
        <div style={{ position: 'fixed', zIndex: 5, width: '100%', height: '50px', backgroundColor: 'white'}}>
            <PageHeader
                // className="site-page-header"
                style={{boxShadow: "0px 4px 4px #ededed"}}
                {...props}
            />
        </div>

    );
}