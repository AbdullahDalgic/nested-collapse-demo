import { Layout } from "antd";

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      Nested Collapse ©{new Date().getFullYear()} Created by{" "}
      <a href="https://abdullahdalgic.com.tr" target="_blank">
        Abdullah DALGIÇ
      </a>
    </Layout.Footer>
  );
};

export default Footer;
