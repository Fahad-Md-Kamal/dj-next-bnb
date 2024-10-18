import Image from "next/image";

export default function Home() {
  return (
      <main className="">
        Django BNB
        <Image src={"/logo.png"} alt="" width={200} height={200} />
        <h2 className="text-airbnb">Django and next rules</h2>
      </main>
  );
}
