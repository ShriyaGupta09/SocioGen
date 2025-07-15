import { LuCopy } from "react-icons/lu";
import { Box, IconButton } from "@chakra-ui/react";
import { copyText } from "@/utils/helpers";
import { showMessage } from "@/utils/toast";

interface DeleteButtonProps {
  response: string;
}

const CopyButton = ({ response }: DeleteButtonProps) => {
  const onCopy = async () => {
    const isCopied = await copyText(response);
    if (isCopied) {
      return showMessage({
        type: "success",
        title: "Success",
        description: "Copied to clipboard",
      });
    }
  };
  return (
    <Box>
      <IconButton aria-label="Copy" onClick={onCopy} colorPalette="gray">
        <LuCopy />
      </IconButton>
    </Box>
  );
};

export { CopyButton };
