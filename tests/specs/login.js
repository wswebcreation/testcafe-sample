import Login from '../page-objects/Login';
import { LOGIN_USERS } from '../config/constants';
import Inventory from '../page-objects/Inventory';

fixture`Test Login`
	.beforeEach(t=> t.resizeWindow(1366, 768))
	.page(`${ Login.url }`);

test('should be able to test loading of login page', async t => {
	await t.expect(Login.screen.exists).ok();
});

test('should be able to login with a standard user', async t => {
	await Login.signIn(LOGIN_USERS.STANDARD);
	await t.expect(Inventory.screen.exists).ok();
});

test('should not be able to login with a locked user', async t => {
	await Login.signIn(LOGIN_USERS.LOCKED);
	await t.expect(Login.errormessage.innerText).eql('Epic sadface: Sorry, this user has been locked out.');
});

test('should not be able to login with an invalid username', async t => {
	await Login.signIn(LOGIN_USERS.NO_USER_DETAILS);
	await t.expect(Login.errormessage.innerText).eql('Epic sadface: Username is required');
});

test('should not be able to login with an invalid password', async t => {
	await Login.signIn(LOGIN_USERS.NO_PASSWORD);
	await t.expect(Login.errormessage.innerText).eql('Epic sadface: Password is required');
});

test('should not be able to login with non existing data', async t => {
	await Login.signIn(LOGIN_USERS.NO_MATCH);
	await t.expect(Login.errormessage.innerText).eql('Epic sadface: Username and password do not match any user in this service');
});
