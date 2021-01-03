const incremented = "counter/incremented";
const decremented = "counter/decremented";
const toZero = "counter/toZero";
const incrementByAmount = "counter/incrementByAmount";

export const windowLocation = {
  // Get data from address
  get: function () {
    let vars = {},
      hash,
      splitter,
      hashes;

    hashes = decodeURIComponent(window.location.hash.substr(1));
    splitter = "/";

    if (hashes.length === 0) {
      return vars;
    } else {
      hashes = hashes.split(splitter);
    }

    for (var i in hashes) {
      if (hashes.hasOwnProperty(i)) {
        hash = hashes[i].split("=");
        if (typeof hash[1] == "undefined") {
          vars["anchor"] = hash[0];
        } else {
          vars[hash[0]] = hash[1];
        }
      }
    }
    return vars;
  },
  // Replace the data in the address with the received array
  set: function (vars) {
    let hash = "";
    for (var i in vars) {
      if (vars.hasOwnProperty(i)) {
        hash += "&" + i + "=" + vars[i];
      }
    }

    window.location.hash = hash.substr(1);
  },
  // Add one value to the address
  add: function (key, val) {
    const hash = this.get();
    hash[key] = val;
    this.set(hash);
  },
  // Remove one value from the address
  remove: function (key) {
    const hash = this.get();
    delete hash[key];
    this.set(hash);
  },
  // Clearing all values in the address
  clear: function () {
    this.set({});
  },
};

const windowLocationState = +windowLocation.get().value || 0;

function counterReducer(state = { value: windowLocationState }, action) {
  switch (action.type) {
    case incremented:
      return { value: state.value + 1 };
    case decremented:
      return { value: state.value - 1 };
    case toZero:
      return { value: (state.value = 0) };
    case incrementByAmount:
      return { value: (state.value += action.payload) };
    default:
      return state;
  }
}

export const selectCount = (state) => state.value;

export const types = { incremented, decremented, toZero, incrementByAmount };

export default counterReducer;
