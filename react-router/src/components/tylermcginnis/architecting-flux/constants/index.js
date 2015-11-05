import keyMirror from 'keymirror';
import _ from 'lodash';

const GLOBALS = {
	ADD_ITEM : null,
	REMOVE_ITEM : null
};

let  constants = _.extend({}, GLOBALS);

export default keyMirror(constants);
