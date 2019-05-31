export const VALID_PASSWORD = 'secret_sauce';
export const INVALID_PASSWORD = 'foo-bar';
export const EMPTY_PASSWORD = '';
export const LOGIN_USERS = {
	LOCKED:{
		username: 'locked_out_user',
		password: VALID_PASSWORD,
	},
	NO_MATCH:{
		username: 'd',
		password: INVALID_PASSWORD,
	},
	NO_USER_DETAILS:{
		username: '',
		password: EMPTY_PASSWORD,
	},
	NO_PASSWORD:{
		username: 'standard_user',
		password: EMPTY_PASSWORD,
	},
	PERFORMANCE:{
		username: 'performance_glitch_user',
		password: VALID_PASSWORD,
	},
	STANDARD:{
		username: 'standard_user',
		password: VALID_PASSWORD,
	},
};
