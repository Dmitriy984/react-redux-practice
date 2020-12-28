// export const Hash = {
// 	// Получаем данные из адреса
// 	get: function() {
// 		let vars = {}, hash, splitter, hashes;

//         hashes = decodeURIComponent(window.location.hash.substr(1));
//         splitter = '/';


// 		if (hashes.length === 0) {return vars;}
// 		else {hashes = hashes.split(splitter);}

// 		for (var i in hashes) {
// 			if (hashes.hasOwnProperty(i)) {
// 				hash = hashes[i].split('=');
// 				if (typeof hash[1] == 'undefined') {
// 					vars['anchor'] = hash[0];
// 				}
// 				else {
// 					vars[hash[0]] = hash[1];
// 				}
// 			}
// 		}
// 		return vars;
// 	},
// 	// Заменяем данные в адресе на полученный массив
// 	set: function(vars) {
// 		let hash = '';
// 		for (var i in vars) {
// 			if (vars.hasOwnProperty(i)) {
// 				hash += '&' + i + '=' + vars[i];
// 			}
// 		}

// 		window.location.hash = hash.substr(1);

// 	},
// 	// Добавляем одно значение в адрес
// 	add: function(key, val) {
// 		const hash = this.get();
// 		hash[key] = val;
// 		this.set(hash);
// 	},
// 	// Удаляем одно значение из адреса
// 	remove: function(key) {
// 		const hash = this.get();
// 		delete hash[key];
// 		this.set(hash);
// 	},
// 	// Очищаем все значения в адресе
// 	clear: function() {
// 		this.set({});
// 	},
// };

//const hashState = +Hash.get().value || 0;
const cookiesState = +document.cookie.replace(/(?:(?:^|.*;\s*)state\s*\=\s*([^;]*).*$)|^.*$/, "$1") || 0;

function counterReducer(state = { value: cookiesState }, action) {
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
