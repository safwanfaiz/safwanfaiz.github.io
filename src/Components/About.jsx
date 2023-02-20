import {
    Stack,
    Text,
    useColorMode,
    Box,
   
  } from "@chakra-ui/react";
//   import States from "./States";
  
  
  function About() {
    const { colorMode } = useColorMode();
  
    const isDark = colorMode === "dark";
  
    return (
      <>
        <Stack w="100%" id="about" py={10} justify="center" align="center">
          <Text fontSize="4xl"  fontWeight="bold">
            ABOUT
          </Text>
          {/* <SimpleGrid
            columns={[1, 1, 2, 2]}
            p={10}
            spacing={10}
            border="1px solid red"
            w={["100%", "100%", "80%", "80%"]}
            
          > */}
            <Box columns={[1, 1, 2, 2]}
            p={10}
            spacing={10}
            // border="1px solid red"
            w={["100%", "100%", "100%", "80%"]}
           
             >
              <Text 
                margin='auto'
                fontSize={["lg", "xl"]}
                textAlign='center'
                fontWeight={isDark ? "thin" : "hairline"}
                letterSpacing="3px"
                width="75%"
                paddingTop={"40px"}
                
              >
                Dedicated and passionate full stack web developer with the ability to
                write clean, reusable,code. Skilled and experienced at
                building and maintaining MERN based web applications. Looking
                forward to join a progressive and challenging work environment.
              </Text>
              </Box>
          {/* </SimpleGrid> */}
  
        
          </Stack>
    </>
  );
}

export default About;

