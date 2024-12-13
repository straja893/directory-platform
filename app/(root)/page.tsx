import { auth } from "@/auth";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const session = await auth();

  return (
    <>
      {session && session?.user ? (
        <section className="pink_container">
          <h1 className="heading">
            Pitch Your Startup <br />
            Connect With Entrepreneurs
          </h1>
          <p className="sub-heading !max-w-3xl">
            Submit Ides, Vote on Peaches, and Get Noticed in Virtual
            Competitions.
          </p>
          <SearchForm query={query} />
        </section>
      ) : (
        <section className="pink_container">
          <h1 className="heading"> Please log in </h1>
        </section>
      )}
    </>
  );
}
