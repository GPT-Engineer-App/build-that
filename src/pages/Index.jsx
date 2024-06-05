import { Container, Text, VStack, Box, Code } from "@chakra-ui/react";

const Index = () => {
  const responseTimes = [
    "46.359s",
    "30.067s",
    "16.837s",
    "19.28s"
  ];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" bg="black" color="white" fontFamily="monospace">
      <VStack spacing={4} align="flex-start">
        <Text>base ~/git/mono-gpt-engineer/api/scripts git:(main)</Text>
        <Text>./ping https://api.gptengineer.app</Text>
        {responseTimes.map((time, index) => (
          <Box key={index} p={0} width="100%">
            <Text>Response time {time}.</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;