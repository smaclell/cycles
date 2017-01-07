import { combineReducers } from 'redux';

const topics = {
  1: {
    background: {
      url: 'https://c1.staticflickr.com/5/4114/4754710859_fcfb40ea0b.jpg',
      width: 500,
      height: 375,
    },
    title: 'The church all over the world',
  },
  2: {
    background: {
      url: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/13263877_10101575903938897_112433607350487060_n.jpg?oh=f67ba294e8228b4cbd1d8e8a357a782f&oe=59188D7C',
      width: 520,
      height: 520,
    },
    title: 'My beautilful wife and sons',
  },
  3: {
    background: {
      url: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/14570455_1123511244385088_1194657217645276381_n.jpg?oh=ac40c1b6720652b4e93065dae571e164&oe=58E6AE1D',
      width: 243,
      height: 243,
    },
    title: 'FaithTech in 2016',
  },
};


const lists = {
  default: [1,2,3]
};

function setup(intial) {
  return (state = intial, action) => state;
}

export default combineReducers({
  lists: setup(lists),
  topics: setup(topics),
});
