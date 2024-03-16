import { Flex, Text } from "@chakra-ui/react";

// Flex is chakra's flexbox
// I'm going to use it to wrap the entire nav
// p is padding, h is height, gap is the space between the children, ml is margin-left

// Text is chakra's p tag
// _hover allows us to style the text when we hover over it
const Nav = () => {
  return (
    <Flex p="10px" h="50px" gap="20px" ml="35px" fontSize="18px" alignItems="center">
      <Text fontSize="24px" fontWeight="600" cursor="pointer">Nav</Text>
      <Text cursor="pointer" _hover={{textDecoration: "underline"}}>Tour</Text>
      <Text cursor="pointer" _hover={{textDecoration: "underline"}}>Shop</Text>
      <Text cursor="pointer" _hover={{textDecoration: "underline"}}>About</Text>
    </Flex>
  )
};

export default Nav;