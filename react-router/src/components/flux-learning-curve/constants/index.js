import keyMirror from 'keymirror';
import _ from 'lodash';

const GLOBALS = {
	NEW_ITEM : null,
	SAVE_ITEM : null,
	REMOVE_ITEM : null
};

let  constants = _.extend({}, GLOBALS);

export default keyMirror(constants);
