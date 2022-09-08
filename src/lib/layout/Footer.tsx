import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm" color="gray.500">
        {/* {new Date().getFullYear()} -{" "} */}
        <Link href="https://" isExternal rel="noopener noreferrer">
          rent-a-bike
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
