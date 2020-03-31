import {PageHeader} from 'antd';

export default function Topbar() {
    return (
        <div style={{ position: 'fixed', zIndex: 1, width: '100%', height: '50px', backgroundColor: 'white'}}>
            <PageHeader
                className="site-page-header"
                title="WA Ice"
                subTitle="The Elusive Beast"
            />
        </div>

    );
}