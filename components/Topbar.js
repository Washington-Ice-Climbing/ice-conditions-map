import React from "react";
import theme from "../styles/theme";

export default function Topbar({title, subTitle, extra}) {
    const extras = (extra == null) ? null : extra.map((e, i) =>
        <div key={i} className='topbar-item' style={{margin: '15px'}}>
            <div className='topbar-item-inner'>
                {e}
            </div>
        </div>
    )
    return (
        <div style={{ position: 'fixed', zIndex: 5, width: '100%', height: '55px', backgroundColor: 'white', boxShadow: "0px 4px 4px #ededed"}}>
            <div style={{display: 'flex', flexDirection: 'row', position: 'relative'}}>
                <div className='topbar-item' style={{padding: '10px 20px'}}>
                    <div className='topbar-item-inner' style={{fontSize: '22px'}}>
                        <b>{title}</b>
                    </div>
                </div>
                <div className='topbar-item'>
                    <div className='topbar-item-inner' style={{color: theme.colors.grayText, fontSize: '17px'}}>
                        {subTitle}
                    </div>
                </div>
                <div style={{flexGrow: '1'}}/>
                {extras}
            </div>
            <style jsx>{`
                .topbar-item {
                    flex-grow: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .topbar-item-inner {
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                }
            `}</style>
        </div>

    );
}