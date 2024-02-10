import DefaultLayout from "@/components/layouts/DefaultLayout";
import Main from "@/components/common/Main";
import HomePage from "./pages/Home/Home";

export default function Home() {
  return (
    <DefaultLayout>
      <Main>
        <HomePage />
      </Main>
    </DefaultLayout>
  );
}
