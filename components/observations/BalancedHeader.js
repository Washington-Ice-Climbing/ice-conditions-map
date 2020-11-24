import React from "react";

export default function BalancedHeader({left, right}) {
    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
            {left}
            <div style={{flexGrow: '2', minWidth: '100px'}}/>
            {right}
        </div>
    )
}