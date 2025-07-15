import { useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import { Box, IconButton } from "@chakra-ui/react";
import { deletePostAction } from "@/actions";
import { showMessage } from "@/utils/toast";

interface DeleteButtonProps {
  id: number;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const [loading, setLoading] = useState(false);
  const onDelete = async () => {
    setLoading(true);
    const response = await deletePostAction(id);
    if (response.status === "error") {
      return showMessage({
        type: "error",
        title: "Error",
        description: response.error ?? "Something went wrong",
      });
    }
    if (response.status === "success") {
      return showMessage({
        type: "success",
        title: "Success",
        description: "Post deleted successfully",
      });
    }
    setLoading(false);
  };
  return (
    <Box>
      <IconButton
        aria-label="Delete"
        onClick={onDelete}
        loading={loading}
        colorPalette="red"
      >
        <LuTrash2 />
      </IconButton>
    </Box>
  );
};

export { DeleteButton };
