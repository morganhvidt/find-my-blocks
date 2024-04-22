/**
 * global fmbGlobal
 */
import { Fragment, render, createRoot } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import SearchPage from "./pages/SearchPage.js";
import { FindMyBlocksProvider } from "./context/FindMyBlocksContext.js";
import PageHeader from "./components/PageHeader/PageHeader.js";

/**
 * Embed our App to the HTML.
 */
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("find-my-blocks-app");

  if (target) {
    if (createRoot) {
      createRoot(target).render(<App />);
    } else {
      render(<App />, target);
    }
  }
});

/**
 * Render Our App.
 */
export function App() {
  return (
    <Fragment>
      <FindMyBlocksProvider>
        <PageHeader />
        <SearchPage />
      </FindMyBlocksProvider>
    </Fragment>
  );
}
