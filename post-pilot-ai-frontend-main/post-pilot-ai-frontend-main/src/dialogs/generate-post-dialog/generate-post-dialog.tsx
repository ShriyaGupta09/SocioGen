import { Dialog, Button, Portal, CloseButton } from "@chakra-ui/react";
import { GeneratePostForm } from "./generate-post-form";

const GeneratePostDialog = () => {
  return (
    <Dialog.Root size="lg">
      <Dialog.Trigger asChild>
        <Button colorScheme="dark">Generate Post</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Generate AI Post</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <GeneratePostForm />
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export { GeneratePostDialog };
