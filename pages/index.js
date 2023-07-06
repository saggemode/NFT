import Head from "next/head";
import NftCard from "../components/NftCard";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <Layout>
      <div className="pt-20">
        <NftCard />
      </div>
    </Layout>
  );
}
