import ShowAllPosts from "@/components/ShowAllPosts";
import FilterContainer from "@/components/FilterContainer";

export default async function App({ searchParams }) {
  return (
    <>
      <FilterContainer />
      <ShowAllPosts searchParams={searchParams} />
    </>
  );
}
