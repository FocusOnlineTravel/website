import { gql, useQuery } from '@apollo/client';

export default function About() {
  const { data, loading, error } = useQuery(about_page);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{data?.page?.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data?.page?.content }} />
    </div>
  );
}

const about_page = gql`
  query aboutPage {
    page(id: "about", idType: URI) {
      title
      content
    }
  }
`;