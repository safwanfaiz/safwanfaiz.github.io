import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
 
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useColorMode,
  useToast,
  VStack,
} from "@chakra-ui/react";

import emailjs from "@emailjs/browser";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useFormik } from "formik";
import { contactFormSchema } from "../schData/contactform";

// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

function Contact() {
//   const toast = useToast();
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       name: "",
//       message: "",
//     },
//     validationSchema: contactFormSchema,
//     onSubmit: (values, action) => {
//       emailjs
//         .send(
//           process.env.REACT_APP_FORM_SERVICE_KEY,
//           process.env.REACT_APP_FORM_TEMPLATE_KEY,
//           values,
//           process.env.REACT_APP_FORM_API_KEY
//         )
//         .then(
//           () => {
//             toast({
//               title: "Sent",
//               description: "We've sent your mail successfully",
//               status: "success",
//               duration: 2000,
//               isClosable: true,
//             });
//           },
//           () => {
//             toast({
//               title: `Error`,
//               description: "Try again...",
//               isClosable: true,
//             });
//           }
//         );
//       action.resetForm();
//     },
//   });

  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";
  return (
    <Stack
      id="contact"
      p={2}
      fontWeight={isDark ? "thin" : "hairline"}
      letterSpacing="2px"
      
    >
      <Text fontSize="3xl" align="center" fontWeight="bold">
        CONTACT ME
      </Text>
      <VStack columns={[1, 1, 2, 2]} spacing="10">
        <VStack
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(0, 0, 0, 0.35) 0px 5px 15px"
          p={10}
          data-aos="zoom-in"
          spacing={10}
          borderRadius="15px"
          
        >
        
          <Text fontSize="2xl" fontWeight="semibold" align={"center"}>
            MohammedSafwan Faizahmed 
          </Text>
          <Text fontSize={["lg", "lg", "2xl", "2xl"]} fontWeight="semibold">
            7600019111
          </Text>
          <Text fontSize={["lg", "lg", "2xl", "2xl"]} fontWeight="semibold">
            safwanfaiz8@gmail.com
          </Text>

          <SimpleGrid columns={[1, 2, 2, 2]} spacing="10px" w="80%">
            <Button
              onClick={() => window.open("https://wa.me/+919824987655")}
              colorScheme="whatsapp"
              leftIcon={<FaWhatsapp />}
              fontWeight="semibold"
              letterSpacing="2px"
            >
              WhatsApp
            </Button>
            <Button
              onClick={() =>
                window.open("https://www.linkedin.com/in/safwan-faiz-0343a6184/")
              }
              colorScheme="linkedin"
              leftIcon={<FaLinkedin />}
              fontWeight="semibold"
              letterSpacing="2px"
            >
              LinkedIn
            </Button>
          </SimpleGrid>
        </VStack>

       
        </VStack>
    </Stack>
  );
}

export default Contact;