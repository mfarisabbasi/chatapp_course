import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { ChatState } from "../context/ChatProvider.js";
import SideDrawer from "../components/misc/SideDrawer.js";
import MyChats from "../components/misc/MyChats.js";
import ChatBox from "../components/misc/ChatBox.js";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        d="flex"
        justifyContent="space-between"
        w={"100%"}
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
