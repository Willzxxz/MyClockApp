import { Text } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React, { useCallback, useState, useEffect } from "react";

const options = [
    {
      timeZone: "Europe/London",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    },
    {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    },
    {
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    },
    {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    },
  ],
  ukTimeZone = new Intl.DateTimeFormat([], options[0]),
  spTimeZone = new Intl.DateTimeFormat([], options[1]),
  nyTimeZone = new Intl.DateTimeFormat([], options[2]),
  shTimeZone = new Intl.DateTimeFormat([], options[3]);

const UkClock = () => {
  const ukTime = ukTimeZone.format(new Date());
  const spTime = spTimeZone.format(new Date());
  const nyTime = nyTimeZone.format(new Date());
  const shTime = shTimeZone.format(new Date());
  const [currentTime, setCurrentTime] = useState();

  const updateTime = useCallback(() => {
    let time = new Intl.DateTimeFormat([], options);

    setCurrentTime(time);
  }, []);

  useEffect(() => {
    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, [updateTime]);

  return (
    <Box mx='30rem' spacingY='50px' h='40rem'>
      <HStack>
        <Text> UK TIME: </Text>
        <Text fontSize="30px">{ukTime}</Text>
      </HStack>
      <HStack>
        <Text>SP TIME: </Text>
        <Text fontSize="30px">{spTime}</Text>
      </HStack>

      <HStack>
        <Text>NY TIME: </Text>
        <Text fontSize="30px">{nyTime}</Text>
      </HStack>

      <HStack>
        <Text>SH Time: </Text>
        <Text fontSize="30px">{shTime}</Text>
      </HStack>
    </Box>
  );
};

export default UkClock;
