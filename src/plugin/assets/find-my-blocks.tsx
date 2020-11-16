/** @jsx jsx */
import { jsx } from "theme-ui";
import ReactDOM from "react-dom";
import { ThemeProvider } from "theme-ui";
import { App } from "../../components/App";
import { theme } from "../../theme";

import { useBlocks } from "../../hooks";
// import { breakpoints } from "../../helpers/global";
// import { windowWasReloaded } from "../../helpers/windowWasReloaded";

// import { Layout } from "../../components/Layout";
// import { Sidebar, SidebarOrder } from "../../components/Sidebar";
// import { Settings } from "../../components/Settings";
// import { CardList, CardOrder } from "../../components/CardList";
// import { Box } from "theme-ui";
// import { Loading } from "../../components/Loading";

// import "./find-my-blocks.foundation.css";
// import styles from "./find-my-blocks.css";

interface Block {
  name: String;
  posts: Array<String>;
}

const FindMyBlocks = () => {
  const [blocks] = useBlocks();
  return (
    <ThemeProvider theme={theme}>
      <App blocks={blocks} />
    </ThemeProvider>
  );
  // const [active, setActive] = useState<string | null>("");
  // const [navOrder, setNavOrder] = useState<SidebarOrder>("az");
  // const [showCoreBlocks, setShowCoreBlocks] = useState<boolean>(false);
  // const [cardOrder, setCardOrder] = useState<CardOrder>("az");
  // const [cards, setCards] = useState([]);
  // const [blocks] = useBlocks();
  // const { ref, width = 1 } = useThrottledResizeObserver(100);
  // const hasBlocks = blocks != undefined && blocks.length > 1;

  // useEffect(() => {
  //   if (windowWasReloaded() && hasBlocks) {
  //     if (localStorage.getItem("fmb_active")) {
  //       setActive(localStorage.getItem("fmb_active"));
  //     }
  //     if (localStorage.getItem("fmb_navOrder")) {
  //       setNavOrder(localStorage.getItem("fmb_navOrder") as SidebarOrder);
  //     }
  //     if (localStorage.getItem("fmb_cardOrder")) {
  //       setCardOrder(localStorage.getItem("fmb_cardOrder") as CardOrder);
  //     }
  //   }
  // }, [blocks]);

  // useEffect(() => {
  //   if (hasBlocks) {
  //     const activeBlock = blocks.find((block: Block) => block.name === active);
  //     if (activeBlock != undefined && activeBlock.posts.length > 0) {
  //       setCards(activeBlock.posts);
  //     }
  //   }
  // }, [active]);

  // return (
  //   <ThemeProvider theme={theme}>
  //     <div ref={ref}>
  //       {!hasBlocks ? (
  //         <Box className={styles.loading}>
  //           <Loading />
  //         </Box>
  //       ) : (
  //         <Layout
  //           title={active}
  //           sidebar={
  //             <Sidebar
  //               blocks={blocks}
  //               active={active}
  //               showCoreBlocks={showCoreBlocks}
  //               order={navOrder}
  //               onClick={(name) => {
  //                 localStorage.setItem("fmb_active", name);
  //                 setActive(name);
  //                 window.scrollTo({
  //                   top: 0,
  //                   behavior: "smooth",
  //                 });
  //               }}
  //             />
  //           }
  //           settings={
  //             <Settings
  //               navOrder={navOrder}
  //               cardOrder={cardOrder}
  //               initialOpen={width >= breakpoints.large}
  //               showCoreBlocks={showCoreBlocks}
  //               onNavOrderChange={(val: SidebarOrder) => {
  //                 localStorage.setItem("fmb_navOrder", val);
  //                 setNavOrder(val);
  //               }}
  //               onCardOrderChange={(val: CardOrder) => {
  //                 localStorage.setItem("fmb_cardOrder", val);
  //                 setCardOrder(val);
  //               }}
  //               onShowCoreBlocksClick={(val) => setShowCoreBlocks(val)}
  //             />
  //           }
  //           cards={<CardList cards={cards} order={cardOrder} />}
  //         />
  //       )}
  //     </div>
  //   </ThemeProvider>
  // );
};

ReactDOM.render(<FindMyBlocks />, document.querySelector("#find-my-blocks"));
