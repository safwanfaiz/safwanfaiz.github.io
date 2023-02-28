import { DownloadIcon } from "@chakra-ui/icons";
import {
    Box, Img,
    Stack,
    Text,
    useColorMode,
    Button,
    Flex,
    useMediaQuery,
} from "@chakra-ui/react";
import meIMG from "../Image/my.jpeg";
import Typewriter from "typewriter-effect";
import resume from "../Resume/fw18_0935_Safwan-Shaikh_Resume.pdf";

function Home() {
    const { colorMode } = useColorMode();

    const isDark = colorMode === "dark";
    const [isNotSmallScreen] = useMediaQuery("(min-width: 768px)");
    return (
        <Stack
            id="home"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="3px"
            // border="5px solid yellow"
        >
            <Flex
                // border="3px solid blue"
                justifyContent="space-between"
                // direction={isNotSmallScreen ? "row" : "column"}
                flexDirection={{base:"column",sm:"column",md:"column",lg:"row"}}
                p={isNotSmallScreen ? "32" : "12"}
            > <Box>
                    <Img
                        alignSelf="flex-end"
                        // border="3px solid blue"
                        borderRadius="50%"
                        backgroundColor="transparent"
                        boxShadow="lg"
                        objectFit="cover"
                        h="300px"
                        w="300px"
                        ml={{md:"22%"}}
                        // display={{md:"block"}}
                        // margin={{md:"center"}}
                        src={meIMG}
                    />
                </Box>
                <Box>

                    <Text fontSize={["xl", "4xl", "3.5xl", "3.5xl"]} fontWeight="bold">
                        Hi, 👋🏻
                    </Text>
                    <Text fontSize={["xl", "4xl", "5xl", "5xl"]} fontWeight="semibold"> I am</Text>
                    
          {/* <Typewriter
            options={{
              strings: [
                "👋🏻👋🏻👋🏻",
              ],
              autoStart: true,
              loop: true,
            }}
          /> */}
                    <Text
                        fontSize={["2xl", "5xl", "5xl", "5xl"]}
                        fontWeight="bold"
                        className="name"
                        bgGradient="linear(to-r,cyan.800,blue.500,yellow.900, red.400)"
                        bgClip="text"
                    >
                        MOHAMMEDSAFWAN
                    </Text>

                    <Typewriter
                        options={{
                            strings: [
                                "Full Stack Web Developer",
                                "MERN Developer",
                                "Problem Solver ",
                                "React-Redux Developer ",
                                "Debugger 🤷‍♂️",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <a href={resume} download>
                        <Button
                            onClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/1Iwu8e5TFhN6IGcx8GiIYWNLTKBO1cLny/view?usp=share_link"
                                )
                            }
                            mt={5}
                            mb={5}
                            colorScheme="green"
                            letterSpacing="3px"
                            fontWeight="bold"

                        >
                            RESUME
                            <DownloadIcon ml="9px" />
                        </Button>
                    </a>
                </Box>
            </Flex>
        </Stack>
    );
}

 export default Home;
