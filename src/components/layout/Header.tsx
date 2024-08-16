import { Button, Flex, Layout, Typography } from "antd";
import { TbBrandNpm } from "react-icons/tb";
const { Title } = Typography;

const Header = () => {
  return (
    <Layout.Header>
      <Flex justify="space-between" align="center">
        <Title level={4} style={{ color: "white" }}>
          Nested Collapse
        </Title>

        <Button
          icon={<TbBrandNpm fontSize={"35px"} style={{ color: "#fff" }} />}
          href="https://www.npmjs.com/package/nested-collapse"
          target="_blank"
          type="link"
        />
      </Flex>
    </Layout.Header>
  );
};

export default Header;
