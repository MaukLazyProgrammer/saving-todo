const INITIAL_STATE = {
  allListNames: [{ id: 1642491658591, title: "ListTest", date: "2022-01-14" }],
};

export const ListsReducer = (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case "ADD_LIST":
      // console.log(data);
      return {
        ...state,
        allListNames: [...state.allListNames, data],
      };

    case "EDIT_LIST":
      // console.log(data);
      return {
        ...state,
        // allListNames: [state.allListNames.map(each => each.id === data.id ? { ...data } : each
        allListNames: [state.allListNames.map(each => console.log(each)
        )]
      };

    default:
      return state;
  }
};
