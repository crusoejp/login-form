import { Box, Button, Input, Text } from "@chakra-ui/react";

// Hello, hello
// I've been a react developer for 3 years now
// So I decided to use chakra-ui for this project
// It's a library that provides a set of accessible, reusable, and composable components for React
// It also allows for inline css styling. It's a great library and I highly recommend it.

// I'm going to create a login form component
// It will have two input fields and a button

// Box is chakra's div.
// I'm going to use it to wrap the entire form
// px and py are padding on the x and y axis respectively
// w is width, and m is margin mt is margin-top

// Text is chakra's p tag
// I'm going to use it to display the title of the form

// Input is chakra's input tag
// I'm going to use it to create the input fields
// chakra has default sizes for its components, here we're specifying we want the large input

// Button is chakra's button tag
// I'm going to use it to create the submit button
// colorScheme is a prop that allows us to change the color of the button
const LoginForm = () => {
  return (
    <Box px="5%" py="2%" border="1px solid white" borderRadius="15px" w="350px" m="0 auto" mt="55px" boxShadow="md">
      <Text mt="0" mb="5px" fontSize="24px">LOGIN</Text>
      <Box mb="15px">
        <Input size="lg" placeholder="Username" />
      </Box>
      <Box>
        <Input size="lg" placeholder="Password" type="password" />
      </Box>
      <Button mt="15px" w="100%" colorScheme="blue">Login</Button>
    </Box>
  );
};

export default LoginForm;
