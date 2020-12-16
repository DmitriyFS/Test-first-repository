// import { createMemoryHistory, createBrowserHistory } from "history";

// export const createUniversalHistory = ({ initialEntries = [] } = {}) => {
//     if (window) {
//         const history = window.browserHistory || createBrowserHistory();
//         if (process.env.NODE_ENV === "development" && !window.browserHistory) {
//             window.browserHistory = history;
//         }
//         return history;
//     }
//     return createMemoryHistory({ initialEntries });
// };

// export default createUniversalHistory;