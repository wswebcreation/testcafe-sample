import { Selector as $, t } from 'testcafe';

class Inventory {
	constructor() {
		this.screen = $('.inventory_list');
		this.swagItems = $('.inventory_item');
	}
}

export default new Inventory();
