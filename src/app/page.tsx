import { client } from "../../sanity/lib/client";
import Landing from "./components/landing/Landing";

export default async function Home() {
  const data = await client.fetch(`*[_type == "landingProducts"]`);
  const res = await data;
  const data2 = await client.fetch(`*[_type == "landingProducts2"]`);
  const res2 = await data2;
  // console.log(res);

  return (
    <main className={""}>
      <Landing landingProducts={res} landingProducts2={res2} />
    </main>
  );
}
