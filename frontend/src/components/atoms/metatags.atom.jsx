export function MetaTags({ title, desc, bots, keywords }) {
  const withBoths = bots ? "index, follow" : "noindex, nofollow";

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <meta name="robots" content={withBoths}></meta>
      <meta name="googlebot" content={withBoths}></meta>
      <meta name="keywords" content={keywords}></meta>
    </>
  );
}
