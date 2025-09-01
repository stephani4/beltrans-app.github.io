import Base from "./base.js";

export default class OrderService extends Base {
    constructor() {
        super();
    }

    send(data) {
        return this.client.post('/order/save', data);
    }
}