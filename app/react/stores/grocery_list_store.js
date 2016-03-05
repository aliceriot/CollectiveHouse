import { createStore} from "redux";
import groceryApp from "../reducers/grocery_list_reducers";

let groceryListStore = createStore(groceryApp);

export default groceryListStore;
