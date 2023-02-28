import {
    Box,
    Button,
    HStack,
    Img,
    SimpleGrid,
    Stack,
    Text,
    useColorMode,
    VStack,
  } from "@chakra-ui/react";
  import bewakoof1 from "../Image/bewakoof1.png";
  import Getharvest1 from "../Image/Getharvest1.png";
  import Zee51 from "../Image/Zee51.png";
  import Interntheory from "../Image/Interntheory.png"
 
  
  import { LinkIcon } from "@chakra-ui/icons";
  import { FaGithub } from "react-icons/fa";

  
  function Projects() {
    const { colorMode } = useColorMode();
  
    const isDark = colorMode === "dark";
    return (
      <Stack
        // border="1px solid green"
        id="project"
        p={[2, 10]}
        maxWidth="100vw"
        fontWeight={isDark ? "thin" : "hairline"}
        letterSpacing="2px"
      >
        <Text
          // border="1px solid green"
          fontSize="3xl"
          align="center"
          fontWeight="bold"
        >
          PROJECTS
        </Text>
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          spacing="55px"
          //  border="1px solid green"
        >
          <VStack
            // -left"
            // border="1px solid green"
            p={[2, 5]}
            spacing={4}
            borderRadius="0px 45px 0px 45px"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(0, 0, 0, 0.35) 0px 5px 15px"
           
          >
            <Text fontSize="2xl" fontWeight="bold" casing="uppercase">
              Intern Theory CLONE
            </Text>
            <Box className="image-container4">
              <Img src={Interntheory} alt="Bewakoof" h="235" />
            </Box>
  
            <VStack spacing={3} align="left">
              <Text align="left"  >
                Intern theory is an online platform for students, for internships and to find out the dream team.
              </Text>
              <HStack>
                <Text color="red.500" fontWeight="bold">
                  Text Stack:
                </Text>
                
                <Text>Chakra-UI,</Text>
                <Text>React-Redux</Text>
                <Text>Firebase</Text>
                
              </HStack>
              
              <Text color="green.500" fontWeight="bold">Solo project Completed in just 4 days</Text>
              <HStack>
                <Button
                  righticon={<FaGithub />}
                  colorScheme="green"
                  variant="solid"
                  ml={"110px"}
                  
                
                  onClick={() =>
                    window.open(
                      "https://github.com/safwanfaiz/unable-wash-1636"
                    )
                  }
                >
                  Github
                </Button>
                <Button
                  righticon={<LinkIcon />}
                  colorScheme="green"
                  variant="solid"
                  onClick={() =>
                    window.open("https://expirianceshala.vercel.app/")
                  }
                >
                  Live
                </Button>
              </HStack>
            </VStack>
          </VStack>
          <VStack
            // -left"
            p={[2, 5]}
            spacing={4}
            borderRadius="0px 45px 0px 45px"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(0, 0, 0, 0.35) 0px 5px 15px"
          >
            <Text fontSize="2xl" fontWeight="bold" casing="uppercase">
              BEWAKOOF.COM CLONE
            </Text>
            <Box className="image-container4">
              <Img src={bewakoof1} alt="Bewakoof" h="235" />
            </Box>
  
            <VStack spacing={3} align="left">
              <Text align="left">
                Bewakoof.com is an ecommerce platform, they sells clothes, footwear and many more
              </Text>
              <HStack>
                <Text color="red.500" fontWeight="bold">
                  Text Stack:
                </Text>
                <Text>Chakra-UI,</Text>
                <Text>React,</Text>
                <Text>javascript,</Text>
              </HStack>
              <Text color="green.500" fontWeight="bold">Solo project Completed in just 4 days</Text>
              <HStack>
                <Button
                  righticon={<FaGithub />}
                  colorScheme="green"
                  variant="solid"
                  ml={"110px"}
                
                  onClick={() =>
                    window.open(
                      "https://github.com/safwanfaiz/noble-volleyball-6086"
                    )
                  }
                >
                  Github
                </Button>
                <Button
                  righticon={<LinkIcon />}
                  colorScheme="green"
                  variant="solid"
                  onClick={() =>
                    window.open("https://rad-alfajores-9f8de0.netlify.app/")
                  }
                >
                  Live
                </Button>
              </HStack>
            </VStack>
          </VStack>
        


          <VStack
            
            spacing={4}
            p={[2, 5]}
            borderRadius="0px 45px 0px 45px"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(0, 0, 0, 0.35) 0px 5px 15px"
          >
            <Text casing="uppercase" fontSize="2xl" fontWeight="bold" >
              Getharvest Clone
            </Text>
            <Box className="image-container2">
              <Img src={Getharvest1} alt="img" h="215" />
            </Box>
  
            <VStack spacing={3} align="left">
              <Text align="left">
                This is the clone of Getharvest.com it is basically time management website And maintain employee records.
              </Text>
              <HStack>
                <Text color="red.500" fontWeight="bold">
                  Text Stack:
                </Text>
                <Text>HTML,</Text>
                <Text>CSS,</Text>
                <Text>JavaScript</Text>
              </HStack>
              <Text color="green.500" fontWeight="bold">Solo project Completed in just 4 days</Text>
              <HStack>
                <Button
                  righticon={<FaGithub />}
                  colorScheme="green"
                  variant="solid"
                  ml={"110px"}
                  onClick={() =>
                    window.open("https://github.com/safwanfaiz/statuesque-animal-5788")
                  }
                >
                  Github
                </Button>
                <Button
                  righticon={<LinkIcon />}
                  colorScheme="green"
                  variant="solid"
                  
                  onClick={() =>
                    window.open("https://mellow-rolypoly-0c3dc9.netlify.app/")
                  }
                >
                  Live
                </Button>
              </HStack>
            </VStack>
          </VStack>
          <VStack
            
            spacing={4}
            p={[2, 5]}
            borderRadius="0px 45px 0px 45px"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(0, 0, 0, 0.35) 0px 5px 15px"
          >
            <Text casing="uppercase" fontSize="2xl" fontWeight="bold" >
              ZEE5 Clone
            </Text>
            <Box className="image-container2">
              <Img src={Zee51} alt="img" h="215" />
            </Box>
  
            <VStack spacing={3} align="left">
              <Text align="left">
              Zee5 is basically a movies and tv shows website, there user can see LIVE movies and TV shows
              </Text>
              <HStack>
                <Text color="red.500" fontWeight="bold">
                  Text Stack:
                </Text>
                <Text>HTML,</Text>
                <Text>CSS,</Text>
                <Text>JavaScript</Text>
              </HStack>
              <Text color="green.500" fontWeight="bold">Collobarotive project built in 4 days</Text>
              <HStack>
                <Button
                  righticon={<FaGithub />}
                  colorScheme="green"
                  variant="solid"
                  ml={"110px"}
                  onClick={() =>
                    window.open("https://github.com/vikas-011/Zee5_Clone.git")
                  }
                >
                  Github
                </Button>
                <Button
                  righticon={<LinkIcon />}
                  colorScheme="green"
                  variant="solid"
                  
                  onClick={() =>
                    window.open("https://zee5clone-final.netlify.app/")
                  }
                >
                  Live
                </Button>
              </HStack>
            </VStack>
          </VStack>
  
        
        </SimpleGrid>
      </Stack>
    );
  }
  
  export default Projects;
 
//   p={[2, 5]}
//   spacing={4}
//   borderRadius="10px"
//   boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(0, 0, 0, 0.35) 0px 5px 15px"
  
// >
//   <Text
//     align="left"
//     fontSize="2xl"
//     fontWeight="bold"
//     casing="uppercase"
//   >
//     Zee Clone
//   </Text>
//   <Box className="image-container1" h="235">
//     <Img src={Zee51} alt="img" />
//   </Box>

//   <VStack spacing={3} align="left">
//     <Text align="left">
//       Zee5 is basically a movies and tv shows website, there user can see movies and TV shows
//     </Text>
//     <HStack>
//       <Text color="red.500" fontWeight="bold">
//         Text Stack:
//       </Text>
//       <Text>HTML,</Text>

//       <Text>CSS,</Text>

//       <Text>JavaScript</Text>
//     </HStack>
//     <Text>Collobarotive project built in 4 day </Text>
//     <HStack>
//       <Button
//         rightIcon={<FaGithub />}
//         colorScheme="green"
//         variant="solid"
//         onClick={() =>
//           window.open("https://github.com/vikas-011/Zee5_Clone.git")
//         }
//       >
//         Github
//       </Button>
//       <Button
//         righttIcon={<LinkIcon />}
//         colorScheme="green"
//         variant="solid"
//         onClick={() => window.open("https://zee5clone-final.netlify.app/")}
//       >
//         Live
//       </Button>
//     </HStack>
//   </VStack>
// </VStack>
