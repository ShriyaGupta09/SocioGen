const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err: any) {
    return false;
  }
};

export { copyText };
