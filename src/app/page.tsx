import { client } from "../../sanity/lib/client";
import Landing from "./components/landing/Landing";

export default async function Home() {
  const data = await client.fetch(
    `*[_type == "landingProducts"] | order(_createdAt)`
  );
  const res = await data;
  const data2 = await client.fetch(
    `*[_type == "landingProducts2"] | order(_createdAt)`
  );
  const res2 = await data2;
  // console.log(res);
  const slides = await client.fetch(`*[_type == "slider"]`);

  return (
    <main className={""}>
      <Landing landingProducts={res} landingProducts2={res2} slides={slides} />
    </main>
  );
}
