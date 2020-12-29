const incremented = () => ({type: 'counter/incremented'});
const decremented = () => ({type: 'counter/decremented'});
const toZero = () => ({ type: 'counter/toZero'});
const incrementByAmount = (payload) => ({type: 'counter/incrementByAmount', payload});

export {incremented, decremented, toZero, incrementByAmount};