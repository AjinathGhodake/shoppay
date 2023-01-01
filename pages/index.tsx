
import axios from 'axios';
import Footer from '../components/footer';
import Header from '../components/header';
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home({ country }: any) {
  const { data: session } = useSession();
  return (
    <div >
      <Header country={country} />
      <Footer country={country} />
    </div>
  );
}

export async function getServerSideProps() {
  // const countryInformation = await axios.get("https://api.ipregistry.co/?key=muwa0u7vbfnpprup").then((res: any) => {
  //   return res.data.location.country;
  // }).catch((err: any) => {
  //   console.log(err);
  // });

  return {
    props: {
      country: { name: "India", flag: "https://cdn.ipregistry.co/flags/emojitwo/in.svg" }
      // country: { name: countryInformation.name, flag: countryInformation.flag.emojitwo },
    }
  };
}