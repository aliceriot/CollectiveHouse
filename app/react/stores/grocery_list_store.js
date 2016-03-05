import { createStore} from "redux";
import groceryApp from "../reducers/grocery_list_reducers";

export default let groceryListStore = createStore(groceryApp);
