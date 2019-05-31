import { Selector as $, t } from 'testcafe';

class Login {
	constructor() {
		this.url = 'https://www.saucedemo.com/';

		this.screen = $('#login_button_container');
		this.username = $('#user-name');
		this.password = $('#password');
		this.loginButton = $('.btn_action');
		this.errormessage = $('[data-test="error"]');
	}

	/**
	 * Sign in
	 *
	 * @param {object} userDetails
	 * @param {string} userDetails.username
	 * @param {string} userDetails.password
	 *
	 * @return {Promise<void>}
	 */
	async signIn(userDetails) {
		const { password, username } = userDetails;

		if (username !== '') {
			await t.typeText(this.username, username);
		}
		if (password !== '') {
			await t.typeText(this.password, password);
		}
		await t.click(this.loginButton);
	}
}

export default new Login();
