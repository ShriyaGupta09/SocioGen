import { useForm } from "react-hook-form";
import { Field, Button, Textarea, Input, Flex } from "@chakra-ui/react";
import { AiFormSchema } from "@/types";
import { createPostAction } from "@/actions";
import { showMessage } from "@/utils/toast";
import { copyText } from "@/utils/helpers";

interface SavePosFormProps {
  responseData: AiFormSchema;
}

const SavePostForm = ({ responseData }: SavePosFormProps) => {
  const { register, handleSubmit, formState } = useForm<AiFormSchema>({
    defaultValues: {
      topic: responseData.topic,
      platform: responseData.platform,
      response: responseData.response,
    },
  });

  console.log("responseData", responseData);

  const onSubmit = async (data: AiFormSchema) => {
    const response = await createPostAction(data);
    console.log("response", response);
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
        description: "Post saved successfully",
      });
    }
  };

  const copyToClipboard = () => {
    copyText(responseData.response);
    return showMessage({
      type: "success",
      title: "Success",
      description: "Post copied to clipboard",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field.Root>
        <Field.Label>Platform</Field.Label>
        <Input
          {...register("platform", { required: true })}
          placeholder="Platform"
          disabled
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>Topic</Field.Label>
        <Textarea
          {...register("topic", { required: true })}
          placeholder="Topic"
          disabled
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Response</Field.Label>
        <Textarea
          {...register("response", { required: true })}
          placeholder="Response"
          rows={10}
        />
      </Field.Root>
      <Flex gap={4}>
        <Button
          type="submit"
          mt={4}
          display="block"
          colorScheme="dark"
          loading={formState.isSubmitting}
        >
          Save
        </Button>
        <Button mt={4} display="block" onClick={copyToClipboard}>
          Copy Post
        </Button>
      </Flex>
    </form>
  );
};

export { SavePostForm };
