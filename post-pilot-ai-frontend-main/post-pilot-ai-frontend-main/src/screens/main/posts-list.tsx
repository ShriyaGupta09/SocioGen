import { useState, useEffect } from "react";
import { Table, Spinner, Flex } from "@chakra-ui/react";
import { getAllPostsAction } from "@/actions";
import { Post } from "@/types";
import { DeleteButton } from "./delete-button";
import { CopyButton } from "./copy-buttom";

const PostsList = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getAllPostsAction();
      if (response.status === "success") {
        setData(response.data);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Platform</Table.ColumnHeader>
            <Table.ColumnHeader>Topic</Table.ColumnHeader>
            <Table.ColumnHeader>Response</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Action</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {loading && (
            <Table.Row>
              <Table.Cell colSpan={4}>
                <Spinner size="lg" color="colorPalette.600" />
              </Table.Cell>
            </Table.Row>
          )}
          {!loading
            ? data.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.platform}</Table.Cell>
                  <Table.Cell>{item.topic}</Table.Cell>
                  <Table.Cell>{item.response}</Table.Cell>
                  <Table.Cell textAlign="end">
                    <Flex gap={4}>
                      <CopyButton response={item.response} />
                      <DeleteButton id={item.id} />
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              ))
            : null}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export { PostsList };
