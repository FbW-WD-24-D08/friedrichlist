export function MetaTags({ title, desc, bots, keywords }) {
  const withBoths = bots ? "index, follow" : "noindex, nofollow";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desc} property="og:description" />
      <meta name="robots" content={withBoths}></meta>
      <meta name="googlebot" content={withBoths}></meta>
      <meta name="keywords" content={keywords}></meta>
    </>
  );
}
