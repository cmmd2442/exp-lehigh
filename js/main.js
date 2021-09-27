import React from 'react';
import ReactDOM from 'react-dom';
import LehighListing from './LehighListing';



const myWork = [
  {
    'title': "302 W 8 st",
    'href': "https://example.com",
    'desc': "",
    'image': {
      'desc': "",
      'src': "images/8stFront.jpg",
      'comment': ""
    }
  }
/*
  {
    'title': "302 W 8 st",
    'href': "https://example.com",
    'desc': "",
    'image': {
      'desc': "",
      'src': "images/8stKitchen.jpg",
      'comment': ""
    }
  },
  {
    'title': "418 Selfridge st",
    'href': "https://example.com",
    'desc': "",
    'image': {
      'desc': "",
      'src': "images/418front.jpg",
      'comment': ""
    }
  },
  {
    'title': "418 Selfridge st",
    'href': "https://example.com",
    'desc': "",
    'image': {
      'desc': "",
      'src': "images/418kitchen.jpg",
      'comment': ""
    }
  },
  {
    'title': "417 Montclair",
    'href': "https://example.com",
    'desc': "",
    'image': {
      'desc': "",
      'src': "images/417kitchen.jpg",
      'comment': "None" 
    }
  },
  {
    'title': "417 Montclair",
    'href': "https://example.com",
    'desc': "",
    'image': {
      'desc': "",
      'src': "images/417Living3.jpg",
      'comment': `"None" Place holder`
   	}
	}
*/
];






ReactDOM.render(<LehighListing work={myWork}/>, document.getElementById('LehighListing'));
