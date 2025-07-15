//
const GENERATE_AI_POST_ENPOINT = "ai/generate/post";
const POST_LIST_ENPOINT = "posts/";
const POST_CREATE_ENPOINT = "posts/";
const POST_DELETE_ENPOINT = (id: number) => `posts/${id}/`;
const POST_UPDATE_ENPOINT = (id: number) => `posts/${id}/`;

export {
  POST_LIST_ENPOINT,
  POST_CREATE_ENPOINT,
  POST_DELETE_ENPOINT,
  POST_UPDATE_ENPOINT,
  GENERATE_AI_POST_ENPOINT,
};
