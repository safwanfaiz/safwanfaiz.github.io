import {
  Box,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import html from "../Image/html.png";
import Css from "../Image/css.png";
import jslogo from "../Image/js.svg";
import reactlogo from "../Image/react.png";
import reduxlogo from "../Image/redux.png";
import jestlogo from "../Image/jest.png";
import cypresslogo from "../Image/cypress.webp";
import chakralogo from "../Image/chakralogo.png";
import figmalogo from "../Image/figma.svg";
import mongodblg from "../Image/mongodb.svg";
import githublg from "../Image/github.png";
import Nodejslg from "../Image/nodejs.svg";
import expresslogo from "../Image/expressjs.svg";
import Dsa from "../Image/dsa.png";
import VS from "../Image/VS.png";

function Skills() {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";
 
  return (
    <Stack py="50px" px="10px" id="skills">
      <Text fontSize="4xl" align="center" letterSpacing="2px" fontWeight="bold">
        SKILLS
      </Text>
      <SimpleGrid columns={[2, 3, 4, 6]} p={10} spacing={5}>
        <Box align="center">
          <Img boxSize="80px" src={html} />
          <Text
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
            p="4"
            fontSize="xl"
            
          >
            HTML
          </Text>
        </Box>
        <Box align="center" _hover = { "transfom:rotate(20deg)" }>
          <Img
            boxSize="80px"
            src={Css}
            
           
          />
          <Text
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
            p="4"
            fontSize="xl"
          >
            CSS
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={jslogo}
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            JAVASCRIPT
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="80px"
            src={reactlogo}
            
          />
          <Text
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
            p="4"
            fontSize="xl"
          >
            REACT
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={reduxlogo}
           
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            REDUX
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={Nodejslg}
            
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            NODE JS
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={expresslogo}
            
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            EXPRESS JS
          </Text>
        </Box>
       
        <Box align="center">
          <Img
            boxSize="80px"
            borderRadius="50%"
            src={chakralogo}
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            CHAKRA-UI
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={mongodblg}
           
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            MONGO DB
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="80px"
            src={githublg}
            
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            GITHUB
          </Text>
        </Box>

        
        <Box align="center">
          <Img
            boxSize="80px"
            src={figmalogo}
            
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            FIGMA
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            borderRadius="full"
            src={cypresslogo}
            
          />
        
          <Text
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
            p="4"
            fontSize="xl"
          >
            CYPRESS
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={jestlogo}
            
          />
          <Text
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
            p="4"
            fontSize="xl"
          >
            JEST
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={Dsa}
            
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            DSA
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={VS}
            
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            VS code
          </Text>
        </Box>
        
      </SimpleGrid>
    </Stack>
  );
}

export default Skills;
