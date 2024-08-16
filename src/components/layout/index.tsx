import { Layout as AntDLayout } from "antd";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <AntDLayout style={{ height: "100%" }}>
      <Header />

      <AntDLayout.Content style={{ padding: "50px", height: "100%" }}>
        {children}
      </AntDLayout.Content>

      <Footer />
    </AntDLayout>
  );
}
