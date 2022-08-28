const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl:
        'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://images.unsplash.com/photo-1581343600721-f4ea1318ec57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=957&q=80',
      id: 2,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'jackets',
      imageUrl:
        'https://images.pexels.com/photos/1706910/pexels-photo-1706910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      id: 3,
      linkUrl: 'shop/jacket',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
