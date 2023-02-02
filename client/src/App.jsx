import "./App.css";

import { useState } from "react";
import Box from "@mui/material/Box";

import Header from "./components/Header";
import QueryForm from "./components/QueryForm";
import ImageGrid from "./components/ImageGrid";

function App() {
  const [imageData, setImageData] = useState({});

  const setData = (data) => {
    setImageData(data);
  };

  console.log(imageData);

  return (
    <Box sx={{ width: "100%"}}>
      <Header />
      <QueryForm setData={setData} />
      <ImageGrid imageData={imageData} />
    </Box>
  );
}

export default App;
