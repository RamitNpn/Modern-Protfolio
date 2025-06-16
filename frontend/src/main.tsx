// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./redux/store.ts";
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </>
// );

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { ClerkProvider } from "@clerk/clerk-react";

const clerkPublishableKey =
  "pk_test_bm90ZWQta3JpbGwtOTEuY2xlcmsuYWNjb3VudHMuZGV2JA"; // no leading space!
const clerkAppearance = {
  variables: {
    colorText: "#000000", // Makes text black
    colorPrimary: "#007bff", // Your main blue
    colorBackground: "#ffffff", // Optional: white background
    colorTextSecondary: "#333333", // Secondary text dark
    colorDanger: "#dc3545",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <ClerkProvider
        appearance={clerkAppearance}
        publishableKey={clerkPublishableKey}
        navigate={(to) => window.history.pushState(null, "", to)}
      >
        <App />
      </ClerkProvider>
    </Provider>
  </>
);
