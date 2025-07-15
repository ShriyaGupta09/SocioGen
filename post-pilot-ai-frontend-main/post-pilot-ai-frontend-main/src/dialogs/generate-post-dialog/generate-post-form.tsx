import { useState } from "react";
import { useForm } from "react-hook-form";
import { Field, Button, Textarea, NativeSelect } from "@chakra-ui/react";
import { AiFormSchema } from "@/types";
import { generatePostAction } from "@/actions";
import { showMessage } from "@/utils/toast";
import { SavePostForm } from "./save-post-form";

const GeneratePostForm = () => {
  const [step, setStep] = useState(1);
  const [responseData, setResponseData] = useState<AiFormSchema | null>(null);
  const { register, handleSubmit, formState } = useForm<AiFormSchema>();

  const onSubmit = async (data: AiFormSchema) => {
    const response = await generatePostAction(data);
    if (response.status === "error") {
      return showMessage({
        type: "error",
        title: "Error",
        description: response.error ?? "Something went wrong",
      });
    }
    if (response.status === "success") {
      setStep(2);
      setResponseData({
        topic: data.topic,
        platform: data.platform,
        response: response.data.data,
      });
      return showMessage({
        type: "success",
        title: "Success",
        description: "Post generated successfully",
      });
    }
  };

  if (step == 2 && responseData) {
    return <SavePostForm responseData={responseData} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field.Root>
        <Field.Label>Platform</Field.Label>
        <NativeSelect.Root>
          <NativeSelect.Field {...register("platform")}>
            <option value="Linkedin">Linkedin</option>
            <option value="Twitter">Twitter</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>
      <Field.Root>
        <Field.Label>Topic</Field.Label>
        <Textarea
          {...register("topic", { required: true })}
          placeholder="Topic"
        />
      </Field.Root>
      <Button
        type="submit"
        mt={4}
        display="block"
        colorScheme="dark"
        loading={formState.isSubmitting}
      >
        Generate
      </Button>
    </form>
  );
};

export { GeneratePostForm };
