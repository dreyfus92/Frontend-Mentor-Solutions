import Head from "next/head";
import { paints } from "../../data/data";
import { Navbar } from "../../components/Navbar";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { BottomBar } from "../../components/BottomBar";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = paints.map((paint) => ({
    params: { id: paint.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const paint = paints.filter((p) => p.id.toString() === params?.id);
  return {
    props: {
      allPaintsData: paint[0],
    },
  };
};

const Paint = ({
  allPaintsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Galleria SlideShow Site</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navbar />
      <main className="container mt-[24px] mb-[123px] mx-auto flex flex-col items-center min-h-screen">
        <div className="relative w-[327px]">
          <img src={allPaintsData.images.hero.small} alt={allPaintsData.name} />
          <div className="absolute w-[280px] h-[104px] bg-white -bottom-[52px] flex flex-col items-start justify-center">
            <div className="ml-[24px]">
              <h2 className="text-[24px] leading-[29px]">
                {allPaintsData.name}
              </h2>
              <p>{allPaintsData.artist.name}</p>
            </div>
          </div>
        </div>
        <div className="relative mt-[98px] w-[327px]">
          <img src={allPaintsData.artist.image} width="64" height="64" alt={allPaintsData.artist.name} className="absolute -top-[46px]"/>
          <h1 className="absolute -top-[25px] right-[10px] text-[100px] text-[#F3F3F3] -z-10">{allPaintsData.year}</h1>
          <p className="text-[#7D7D7D] text-[14px] leading-[28px] mt-[74px]">{allPaintsData.description}</p>
        </div>
      </main>
      <BottomBar nameOfPaint={allPaintsData.name} artist={allPaintsData.artist.name}/>
    </>
  );
};

export default Paint;
