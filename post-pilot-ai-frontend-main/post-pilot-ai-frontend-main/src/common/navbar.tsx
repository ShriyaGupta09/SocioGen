import { Box, Flex, Text, Container } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";

const Navbar = () => {
  return (
    <>
      <Toaster />
      <Box
        bg="gray.800"
        p={4}
        shadow="md"
        position="sticky"
        top={0}
        zIndex={1}
        height={14}
      >
        <Container>
          <Flex>
            <Box>
              <Text fontSize="xl" color="white">
                Post Pilot AI
              </Text>
            </Box>
            <Flex ml="auto" color="white">
              <Box>Home</Box>
              <Box ml={4}>About</Box>
              <Box ml={4}>Contact</Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export { Navbar };
