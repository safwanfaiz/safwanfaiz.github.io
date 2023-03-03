import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    IconButton,
    Spacer,
    useColorMode,
    useDisclosure,
    VStack,
  } from "@chakra-ui/react";
  
  import { FaSun, FaMoon } from "react-icons/fa";
  import styles from "./Navbar.module.css";
  // import Social from "react-social"
  import { Link } from "react-scroll";
  import { useRef } from "react";
  import myresume from "../Resume/fw18_0935_Safwan-Shaikh_Resume.pdf";
  import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";

  
  function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
  
    const isDark = colorMode === "dark";
  
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    
    return (
      <>
      
       <Drawer
          size={["xs", "xs"]}
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={btnRef}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack align="left" spacing={5}>
                <Link
                  to="home"
                  smooth={true}
                  duration={900}
                  spy={true}
                  activeClass={styles.active}
                >
                  HOME
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={900}
                  spy={true}
                  
                  activeClass={styles.active}
                >
                  ABOUT
                </Link>
                <Link
                  to="skills"
                  smooth={true}
                  duration={900}
                  spy={true}
                  
                  activeClass={styles.active}
                >
                  SKILLS
                </Link>
                <Link
                  to="project"
                  smooth={true}
                  duration={900}
                  spy={true}
                  
                  activeClass={styles.active}
                >
                  PROJECTS
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={900}
                  spy={true}
                 
                  activeClass={styles.active}
                >
                  CONTACT
                </Link>
                <a href={myresume} download>
                  <Button
                    mt={5}
                    mb={5}
                    colorScheme="red"
                    fontWeight="bold"
                    letterSpacing="3px"
                  >
                    RESUME
                    <DownloadIcon ml="9px" />
                  </Button>
                </a>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <HStack
          display={["none", "none", "none", "flex"]}
          zIndex={10}
          position="sticky"
          top="0"
          bgColor={isDark ? "gray.800" : "white"}
          borderBottom="1px"
          borderColor="gray.300"
          h="61px"
        >
          {/* <Social /> */}
          <Spacer />
  
          <Flex px="22px" align="center">
            <HStack
              w="60vw"
              display="flex"
              justifyContent="space-evenly"
              fontWeight="semibold"
              letterSpacing="3px"
            >
              {/* icon */}
               <IconButton
              ml="12px"
              isRound
              icon={isDark ? <FaSun /> : <FaMoon />}
              onClick={toggleColorMode}
            /> 
              <Box cursor="pointer">
                <Link
                // border="3px solid blue"
                  cursor="pointer"
                  to="home"
                  smooth={true}
                  duration={900}
                  spy={true}
                  offset={-100}
                  activeClass={styles.active}
                  
                >
                  HOME
                </Link>
              </Box>
              
              <Box cursor="pointer">
                <Link
                  to="about"
                  smooth={true}
                  duration={900}
                  spy={true}
                  offset={-40}
                  activeClass={styles.active}
                >
                  ABOUT
                </Link>
              </Box>
              <Box cursor="pointer">
                <Link
                  to="skills"
                  smooth={true}
                  duration={900}
                  spy={true}
                  offset={-40}
                  activeClass={styles.active}
                >
                  SKILLS
                </Link>
              </Box>
              <Box cursor="pointer">
                <Link
                  to="project"
                  smooth={true}
                  duration={900}
                  spy={true}
                  offset={-30}
                  activeClass={styles.active}
                >
                  PROJECTS
                </Link>
              </Box>
  
              <Box cursor="pointer">
                <Link
                  to="contact"
                  smooth={true}
                  duration={900}
                  spy={true}
                  offset={-30}
                  activeClass={styles.active}
                >
                  CONTACT
                </Link>
              </Box>
              <a href={myresume} download>
                <Button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1Iwu8e5TFhN6IGcx8GiIYWNLTKBO1cLny/view?usp=share_link"
                    )
                  }
                  mt={5}
                  mb={5}
                  colorScheme="green"
                  fontWeight="bold"
                  letterSpacing="3px"
                >
                  RESUME
                  <DownloadIcon ml="9px" />
                </Button>
              </a>
            </HStack>
           
          </Flex>
        </HStack>
  
        <HStack
          position="sticky"
          top={0}
          px="11px"
          py="5px"
          zIndex={10}
          borderBottom="1px"
          borderColor="gray.100"
          bgColor={isDark ? "green.800" : "white"}
          display={["flex", "flex", "flex", "none"]}
        >
          <IconButton
            aria-label="Open Menu"
            mr={2}
            size="md"
            onClick={onOpen}
            isRound={true}
            icon={<HamburgerIcon />}
          />
          <Spacer />
        </HStack>
  
       
      </>
    );
  }
  
  export default Navbar;
  