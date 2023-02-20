import { HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";

function Social() {
  return (
    <HStack spacing="10" ml={[0, 0, 0, "130px"]}>
      <Icon
        as={FaGithub}
        boxSize="30"
        cursor="pointer"
        onClick={() => window.open("https://github.com/safwanfaiz")}
      />
      <Icon
        as={FaLinkedinIn}
        boxSize="30"
        cursor="pointer"
        onClick={() => window.open("https://www.linkedin.com/in/safwan-faiz-0343a6184/")}
      />
      <Icon
        as={FaGoogle}
        boxSize="30"
        cursor="pointer"
        onClick={() => window.open("mailto:safwanfaiz8@gmail.com")}
      />
    </HStack>
  );
}

export default Social;
