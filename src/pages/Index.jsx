// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, VStack, HStack, Text, IconButton, Input, useColorMode, useColorModeValue, Button, Image } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPaperPlane, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box bg={bgColor} minH="100vh" p={4}>
      <VStack spacing={4}>
        <HStack justifyContent="space-between" width="100%" p={4}>
          <HStack spacing={4}>
            <Image borderRadius="full" boxSize="40px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZXxlbnwwfHx8fDE3MTM2NDg5NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" fallback={<FaUserCircle size="40px" />} />
            <Text fontSize="2xl" fontWeight="bold">
              ChatApp
            </Text>
          </HStack>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />
        </HStack>
        <VStack spacing={4} bg={useColorModeValue("white", "gray.700")} width="100%" maxW="md" p={4} borderRadius="lg" boxShadow="md">
          <VStack spacing={4} overflowY="auto" maxH="lg" p={2}>
            {/* Example messages */}
            <HStack alignSelf="flex-start">
              <Text fontSize="md" color={secondaryTextColor}>
                User 1:
              </Text>
              <Text fontSize="md">Hello!</Text>
            </HStack>
            <HStack alignSelf="flex-end">
              <Text fontSize="md" color={secondaryTextColor}>
                You:
              </Text>
              <Text fontSize="md">Hi, how are you?</Text>
            </HStack>
            {/* More messages */}
          </VStack>
          <HStack width="100%">
            <Input placeholder="Type a message..." />
            <IconButton icon={<FaPaperPlane />} colorScheme="blue" variant="solid" borderRadius="full" />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
