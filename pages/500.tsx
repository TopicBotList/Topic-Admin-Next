import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import {
  AddRounded,
  HomeOutlined,
  LoginRounded
} from "@mui/icons-material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <VStack h={"100vh"} w={"100vw"} justifyContent={"center"}>
        <VStack
          bg={"whiteAlpha.50"}
          h={"80vh"}
          w={"100vw"}
          justifyContent={"center"}
        >
          <Heading color={"brandColor.400"} fontSize={"8xl"}>
            500
          </Heading>
          <Text color={"whiteAlpha.700"} fontSize={"xl"}>
            Well this is awkward. The server errored out with no response.
          </Text>
          <HStack mt={"20px !important"}>
            <Button
              onClick={() => router.push("/")}
              leftIcon={<HomeOutlined />}
              colorScheme={"brandColor"}
            >
              Home
            </Button>
            {Cookies.get("token") ? (
              <Button
                onClick={() => router.push("/add")}
                leftIcon={<AddRounded />}
              >
                Add Server
              </Button>
            ) : (
              <Button
                onClick={() =>
                  router.push(
                    `${process.env.apiUrl}/login?branch=${process.env.NEXT_PUBLIC_BRANCH}`
                  )
                }
                leftIcon={<LoginRounded />}
              >
                Login
              </Button>
            )}
          </HStack>
        </VStack>
      </VStack>
    </>
  );
}
