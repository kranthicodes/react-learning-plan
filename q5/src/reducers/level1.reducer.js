let initialState = {
  greeting: "Hello from redux"
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
