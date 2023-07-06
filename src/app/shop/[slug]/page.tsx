import Nav from "@/app/components/nav/Nav";
import { client } from "../../../../sanity/lib/client";
import Shop from "@/app/components/shop/Shop";
import Footer from "@/app/components/footer/Footer";

async function Page({ params }: { params: any }) {
  const { slug } = params;
  const data = await client.fetch(
    `*[_type in ['details2', 'detail'] && slug.current == "${slug}" ][0]`
  );

  const res = data;
  return (
    <div>
      <Nav bgState={res?.navBg} colorState="#000000" state={false} />
      <Shop data={data} />
      <Footer state={res.sec2BackgroundColor} />
    </div>
  );
}

export default Page;
