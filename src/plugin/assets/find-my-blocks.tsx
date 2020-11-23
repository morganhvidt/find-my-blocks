/** @jsx jsx */
import { jsx, ThemeProvider, Box } from "theme-ui";
import ReactDOM from "react-dom";

import { useBlocks } from "../../hooks";
import { Loading } from "../../components/Loading";
import { theme } from "../../theme";

import { App } from "../../components/App";

interface Block {
  name: String;
  posts: Array<String>;
}

const FindMyBlocks = () => {
  const [blocks] = useBlocks();

  return (
    <ThemeProvider theme={theme}>
      {blocks.length > 0 ? <App blocks={blocks} /> : <Loader />}
    </ThemeProvider>
  );
};

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
      }}
    >
      <Loading />
    </Box>
  );
}

ReactDOM.render(<FindMyBlocks />, document.querySelector("#find-my-blocks"));
