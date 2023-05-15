import { Card } from "react-bootstrap";
import MovieDetails from "../components/MovieDetails";
import PageHeader from "../components/PageHeader";

export async function getStaticProps() {
  const res = await fetch(
    "https://doubtful-tights-tuna.cyclic.app/api/movies/573a1391f29313caabcd9600"
  );
  const movie = await res.json();
  return { props: { movie } };
}

const bio =
  "My name is Akshat Jain. My interest areas are Web Development, User Experience(UX), branding and animation. I like transforming concepts and ideas into a presentable and tangible form. I find the ability to influence opinions and emotions through visuals and motion very empowering, and hope to use my abilities to create an impact on people's lives.";

export default function About(props) {
  return (
    <>
      <PageHeader text="About the Developer" />
      <Card>
        <Card.Body>
          <Card.Text>
            <p>{bio}</p>
            <p>
              A movie that I liked was{" "}
              <Card.Link href="/movies/City Lights">City Lights</Card.Link>
            </p>
          </Card.Text>
        </Card.Body>
        <MovieDetails movie={props.movie} />
      </Card>
    </>
  );
}
