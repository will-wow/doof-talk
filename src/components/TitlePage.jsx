/** @jsx jsx */
import { jsx } from "theme-ui";

import { Flex, Text, Image } from "rebass";

import Layout from "./Layout";
import c5Wordmark from "../assets/c5-wordmark.png";

const TitlePage = ({ children }) => {
  return (
    <Layout bg="primary">
      <Flex flexDirection="column" height="100%">
        <Flex flexGrow="1" flexDirection="column" alignItems="center" justifyContent="center">
          {children}
        </Flex>

        <Flex flexDirection="column" alignItems="center" mb={5}>
          <Image src={c5Wordmark} sx={{ width: "15rem" }} />
          <Text fontSize={4} mt={3}>
            carbonfive.com
          </Text>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default TitlePage;
