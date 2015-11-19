import keyMirror from 'keymirror';
import _ from 'lodash';

const GLOBALS = {
	CART_ADD : null,
	CART_REMOVE : null,
	CART_VISIBLE : null,
	SELECT_PRODUCT : null,
	RECEIVE_DATA : null
};

let  constants = _.extend({}, GLOBALS);

export default keyMirror(constants);
