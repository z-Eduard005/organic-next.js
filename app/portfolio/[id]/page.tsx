export default function PortfolioSingle({
  params,
}: {
  params: { id: string };
}) {
  return <div>Portfolio Single page {params.id}!</div>;
}
