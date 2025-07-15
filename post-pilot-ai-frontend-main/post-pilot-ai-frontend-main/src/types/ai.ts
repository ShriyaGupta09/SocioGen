interface AiResponse {
  message: string;
  data: string;
}

interface AiFormSchema {
  topic: string;
  platform: string;
  response: string;
}

export type { AiResponse, AiFormSchema };
