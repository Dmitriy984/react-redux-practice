export const Hash = {
	// Get data from address
	get: function() {
		let vars = {}, hash, splitter, hashes;

        hashes = decodeURIComponent(window.location.hash.substr(1));
        splitter = '/';


		if (hashes.length === 0) {return vars;}
		else {hashes = hashes.split(splitter);}

		for (var i in hashes) {
			if (hashes.hasOwnProperty(i)) {
				hash = hashes[i].split('=');
				if (typeof hash[1] == 'undefined') {
					vars['anchor'] = hash[0];
				}
				else {
					vars[hash[0]] = hash[1];
				}
			}
		}
		return vars;
	},
	// Replace the data in the address with the received array
	set: function(vars) {
		let hash = '';
		for (var i in vars) {
			if (vars.hasOwnProperty(i)) {
				hash += '&' + i + '=' + vars[i];
			}
		}

		window.location.hash = hash.substr(1);

	},
	// Add one value to the address
	add: function(key, val) {
		const hash = this.get();
		hash[key] = val;
		this.set(hash);
	},
	// Remove one value from the address
	remove: function(key) {
		const hash = this.get();
		delete hash[key];
		this.set(hash);
	},
	// Clearing all values in the address
	clear: function() {
		this.set({});
	},
};

const hashState = +Hash.get().value || 0;

function counterReducer(state = { value: hashState }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
      case 'counter/incrementByAmount':
        return { value: state.value += action.payload }
    default:
      return state
  }
}

const incremented = () => ({type: 'counter/incremented'});
const decremented = () => ({type: 'counter/decremented'});
const incrementByAmount = (payload) => ({type: 'counter/incrementByAmount', payload});
const selectCount = state => state.value;

export {incremented, decremented, incrementByAmount, selectCount};

export default counterReducer;
