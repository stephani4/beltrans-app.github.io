import http from "../plugins/axios.js";

export default class Base {
    constructor() {
        this.client = http;
    }
}