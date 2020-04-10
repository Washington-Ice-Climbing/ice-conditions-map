import React from "react";
import theme from "../styles/theme";

export default function Topbar({title, subTitle, extra}) {
    const extras = (extra == null) ? null : extra.map((e, i) =>
        <div key={i} className='topbar-item' style={{margin: '15px'}}>
            {e}
        </div>
    )
    return (
        <div style={{ position: 'fixed', zIndex: 5, width: '100%', height: '55px', backgroundColor: 'white', boxShadow: "0px 3px 5px #ededed"}}>
            <div style={{display: 'flex', flexDirection: 'row', position: 'relative', alignItems: 'center'}}>
                <div className='topbar-item' style={{padding: '10px 20px', fontSize: '22px'}}>
                    <b>{title}</b>
                </div>
                <div className='topbar-item' style={{color: theme.colors.grayText, fontSize: '17px'}}>
                    {subTitle}
                </div>
                <div style={{flexGrow: '1'}}/>
                {extras}
            </div>
            <style jsx>{`
                .topbar-item {
                    flex-grow: 0;
                }
            `}</style>
        </div>

    );
}