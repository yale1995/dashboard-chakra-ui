import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";

import { Input } from "../components/Form/Input";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input name="email" type="email" id="email" />
          <Input name="password" type="password" id="password" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
