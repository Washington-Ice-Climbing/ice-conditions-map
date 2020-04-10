import { Avatar } from "antd";
import theme from '../styles/theme';
import React from "react";

export class ContributorObject {
    constructor(json) {
        this.cid = json.cid
        this.name = json.name
        this.image = json.image
        this.blurb = json.blurb
    }

    getAvatar(size) {
        if (this.image)
            return <Avatar size={size} src={this.image}/>;
        else
            return <Avatar size={size} style={{backgroundColor: theme.colors.link}}>{this.cid}</Avatar>;
    }
}