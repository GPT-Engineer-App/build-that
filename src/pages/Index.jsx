import { Container, Text, VStack, Box } from "@chakra-ui/react";

const Index = () => {
  const responseTimes = [
    "46.359s",
    "30.067s",
    "16.837s",
    "19.28s"
  ];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Ping Response Times</Text>
        {responseTimes.map((time, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" width="100%" textAlign="center">
            <Text>Response time {time}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;