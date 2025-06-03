export function MetaTags({ title, desc, bots, keywords }) {
  const withBoths = bots ? "index, follow" : "noindex, nofollow";

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title || "friedrichList"} />
      <meta name="description" content={desc || "friedrichList"} />
      <meta property="og:description" content={desc || "friedrichList"} />
      <meta name="robots" content={withBoths || false}></meta>
      <meta name="googlebot" content={withBoths || false}></meta>
      <meta name="keywords" content={keywords || "friedrichList"}></meta>
    </>
  );
}
