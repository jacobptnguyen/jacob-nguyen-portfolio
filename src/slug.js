// Stable anchor ids for deep links (e.g. /#freecodecamp from a LinkedIn position).
export const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
