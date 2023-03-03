import { Flex, HStack, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const States = () => {
  const [isSmallerThen] = useMediaQuery("(max-width: 769px)");
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <Stack p={5} justify={"center"}  align={"center"}>
      <Flex gap={10} flexDirection={isSmallerThen ? "column" : "row"}>
        {/* <HStack>
          <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=safwanfaiz&layout=compact" />
        </HStack> */}
        <HStack justify="center" data-aos="fade-up">
          <GitHubCalendar
            // transformData={selectLastHalfYear}
            username="safwanfaiz"
          >
            <ReactTooltip delayShow={10} html />
          </GitHubCalendar>
        </HStack>
      </Flex>
      <Flex gap={10} flexDirection={isSmallerThen ? "column" : "row"}>
        <HStack>
          <Image src="https://github-readme-streak-stats.herokuapp.com?user=safwanfaiz" />
        </HStack>
        <HStack>
          <Image src="https://github-readme-stats.vercel.app/api?username=safwanfaiz" />
        </HStack>
      </Flex>
    </Stack>
  );
};

export default States;
