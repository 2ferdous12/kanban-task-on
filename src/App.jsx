import { useState } from "react";
import Header from "./components/Header"


function App() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  return (
    <>
   <Header setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}></Header>
    </>
  )
}

export default App
