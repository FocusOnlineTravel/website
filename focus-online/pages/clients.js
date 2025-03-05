import { gql, useQuery } from '@apollo/client';
import Link from "next/link";
import Image from 'next/image'

const CLIENT_PAGE = gql`
  query getClients {
    clients {
      nodes {
        clientFields {
          clientName
          clientUrl
          clientImage {
            node {
              altText
              mediaItemUrl
              uri
              sourceUrl
            }
          }
        }
        databaseId
        slug
      }
    }
  }
`;

export default function Clients() {
  const { data, loading, error } = useQuery(CLIENT_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className='text-3xl mt-4 mb-9 font-bold'>Our Clients</h1>
      <div className='flex flex-wrap justify-center width-full'>
        {data.clients.nodes.map((client) => (
          <div className="mx-4" key={client.databaseId}>
            <Image className="aspect-[12/9] object-cover" src={client.clientFields?.clientImage.node.mediaItemUrl} width={400} height={200} alt={client.clientFields?.clientImage.node.altText} />
            <p className="my-4 text-xl">{client.clientFields?.clientName}</p>
            <Link className='btn btn-blue' href={`/clients/${client.slug}`}>
              View Client
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

