/**
 * @typedef {string | { [key: string]: string } | URLSearchParams | undefined} Query
 */

/**
 * Parse the meta string into object
 *
 * @param {string} metaString
 * @return {[key: string]: string}
 */
function parseMeta(metaString) {
  const meta = {};

  metaString.split(" ").forEach((str) => {
    const equalIndex = str.indexOf("=");

    if (equalIndex > 0) {
      const key = str.slice(0, equalIndex);
      const value = str.slice(equalIndex + 1);

      meta[key] = value;
    }
  });

  return meta;
}

/**
 * Merge several queries into one URLSearchParams
 *
 * @param {Query} baseQuery
 * @param {Query[]} queries
 * @return {URLSearchParams}
 */
function mergeQuery(baseQuery, ...queries) {
  const query = new URLSearchParams();

  // Interesting that chaining multiple URLSearchParams calls returns a single one
  // So baseQuery could be either `string`, `object`, `URLSearchParams`, or even `undefined`
  new URLSearchParams(baseQuery).forEach((value, key) => {
    query.set(key, value);
  });

  queries.forEach((params) => {
    new URLSearchParams(params).forEach((value, key) => {
      query.set(key, value);
    });
  });

  return query;
}

/**
 * Convert relative path to unified base path.
 *
 * @param {string} path The path of the entry file
 * @return {string} The bast path
 */
function toBasePath(path) {
  if (path.startsWith("./")) {
    return path.slice(2);
  } else if (path.startsWith("/")) {
    return path.slice(1);
  }

  return path;
}

/**
 * Merge style strings into one
 *
 * @param {string} baseStyle
 * @param {string} style
 * @return {string}
 */
function mergeStyle(baseStyle, style) {
  function toEntries(styleString) {
    return styleString
      .trim()
      .split(";")
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => entry.split(":").map((value) => value.trim()));
  }

  const baseStyleEntries = toEntries(baseStyle);
  const styleEntries = toEntries(style);

  const mergedObject = Object.fromEntries(
    baseStyleEntries.concat(styleEntries)
  );
  const mergedEntries = Object.entries(mergedObject);

  return mergedEntries.map((entry) => entry.join(":") + ";").join(" ");
}

module.exports = {
  parseMeta,
  mergeQuery,
  toBasePath,
  mergeStyle,
};
