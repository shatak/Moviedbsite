import { useRouter } from "next/router";
import useSWR from "swr";
import MovieDetails from "../../components/MovieDetails";
import Error from "next/error";
import PageHeader from "../../components/PageHeader";

export default function Title() {
  const router = useRouter();
  const { title } = router.query;

  const { data, error } = useSWR(
    `https://doubtful-tights-tuna.cyclic.app/api/movies?page=1&perPage=10&title=${title}`
  );

  if (data) {
    if (data.length === 0) {
      return <Error statusCode={404} />;
    } else {
      return data.map((movie) => (
        <div key={movie._id}>
          <PageHeader text={movie.title} />
          <MovieDetails movie={movie} />
          <br />
        </div>
      ));
    }
  } else {
    return null;
  }
}
