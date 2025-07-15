"use client";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { PostsList } from "./posts-list";
import { GeneratePostDialog } from "@/dialogs";

const Main = () => {
  return (
    <Box mt={4} mb={8}>
      <Flex>
        <GeneratePostDialog />
      </Flex>
      <PostsList />
    </Box>
  );
};

export { Main };
