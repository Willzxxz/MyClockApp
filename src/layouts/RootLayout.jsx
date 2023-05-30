import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Flex
      bg="#F7CE4C"
      height="100vh"
      alignItems="center
    "
    >
      <Outlet w="1440px" />
    </Flex>
  );
}
