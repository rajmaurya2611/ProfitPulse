import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="bg-gray-100 h-[100vh] overflow-hidden">
      <Content className="h-full">
        <div className="relative w-full h-full">
          <iframe
            title="Power BI Report"
            src="https://app.powerbi.com/reportEmbed?reportId=2f550fdb-2c66-40fb-91d0-ee047994dcae&autoAuth=true&ctid=7a746742-7931-4f5d-8af3-d2bf6fbb3a15"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full bg-black rounded-xl border shadow-lg"
          ></iframe>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
