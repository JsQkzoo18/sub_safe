import { map, size } from "lodash";
import {
  Stack,
  StackDivider,
  useColorModeValue,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import Loader from "../Loader";
import { useGetComments } from "../../hooks/useComments";
import { CardComment } from "./CardComment";
import AddComments from "../AddComments";
import { Blob } from "../Results/SuccessResult/SuccessResult";
import commentAnimation from "../../public/lotties/comment.json";
import Lottie from "react-lottie";
import { defaultOptions } from "../../utils/lottie-config";
import { useAuth } from "../../hooks";

export const Comments = ({ id, reloadComments, setReloadComments }) => {
  if (id === undefined) return null;

  const { auth } = useAuth();

  const { comments, loading } = useGetComments(
    id,
    reloadComments,
    setReloadComments
  );
  if (loading) return <Loader />;

  const bgGradientColor = useColorModeValue(
    "linear(to-r, #7928CA, #B83481)",
    "linear(to-r, #dd5745, #F6AD55)"
  );
  return (
    <>
      <AddComments id={id} setReloadComments={setReloadComments} />
      {size(comments) > 0 ? (
        <Stack
          spacing={{ base: 1, md: 2 }}
          overflowY="scroll"
          maxHeight={{ base: "full", md: "full", lg: "510px" }}
          h={"505px"}
          m={0}
          p={0}
        >
          <Stack
            spacing={{ base: 1, sm: 2 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            {map(comments, (x) => (
              <CardComment
                key={x.id}
                user={x.user[0]?.username}
                title={x.title}
                description={x.content}
              />
            ))}
          </Stack>
        </Stack>
      ) : (
        <Box
          maxHeight={{ base: "full", md: "full", lg: "510px" }}
          h={{ sm: "50px", md: "505px" }}
          m={0}
          p={0}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            my={2}
            color={useColorModeValue("primaryLight", "primaryDark")}
            fontSize="xl"
            fontWeight="bold"
          >
            No hay comentarios
          </Text>

          {auth && (
            <Text
              my={2}
              // bgGradient={bgGradientColor}
              // bgClip="text"
              color={useColorModeValue("primaryLight", "primaryDark")}
              fontSize="xl"
              fontWeight="extrabold"
            >
              Se el primero en agregar un comentario !!
            </Text>
          )}

          <Box
            position={"relative"}
            height={"400px"}
            width={"400px"}
            rounded={"2xl"}
            boxShadow={"md"}
            overflow={"hidden"}
            mt={10}
            display={{ base: "none", sm: "none", md: "block" }}
          >
            <Lottie
              options={defaultOptions(commentAnimation)}
              height={"400px"}
              width={"400px"}
            />
          </Box>
        </Box>
      )}
    </>
  );
};
