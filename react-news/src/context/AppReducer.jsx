const news = (state, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        news: action.payload,
      };

    case "CHANGE_THEME":
      return {
        ...state,
        isDarkThemeEnabled: action.payload,
      };

    default:
      return state;
  }
};

export default news;
