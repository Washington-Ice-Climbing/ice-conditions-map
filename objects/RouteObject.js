import {ContributorObject} from "./ContributorObject";
import {contributors} from "../public/contributors/contributors";

export class RouteObject {
    constructor(json) {
        this.rid = json.rid;
        this.name = json.name;
        this.peak = json.peak;
        this.region = json.region;
        this.grade = json.grade;
        this.length = json.length;
        this.difficulty = json.difficulty;
        this.stars = json.stars;
        this.commitment = json.commitment;
        this.avalanche = json.avalanche;
        this.approachTime = json.approach;
        this.season = json.season;
        this.fa = json.fa;
        this.coverImg = json.coverImg;
        this.content = json.content;
        this.imgs = json.imgs;
        this.map = json.map;
        this.topoImg = json.topoImg;
        this.coordinates = json.coordinates;
        this.contributors = contributors.filter(c => json.contributors.includes(c.cid)).map(c => new ContributorObject(c));
    }

    getTitle() {
        return `${this.name}, ${this.peak}`;
    }

    getSubtitle() {
        return `${this.grade}, ${this.length}`;
    }
}