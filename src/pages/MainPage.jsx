import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Clock from "../Clock";
import Clock2 from "../Clock2";
import Clock3 from "../Clock3";
import UkClock from "../UkClock";

export default function MainPage() {
  return (
    <Box textAlign="center" height="full" border="solid" w="1440px">
      {/* <Text alignItems="center" fontSize="4rem" border="solid" mt="10rem">
        Hello!
      </Text> */}
      {/* <Box pt="100px" border="solid" fontSize="3rem">
        <Clock />
        <Box border="solid" fontSize="3rem">
          <Clock2 />
        </Box>
      </Box> */}

      <Box border='solid'>
        {/* <Clock3 /> */}
        <UkClock />
      </Box>
    </Box>
  );
}
