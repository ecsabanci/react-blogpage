import supabase from "../lib/supaBaseClient";

const fetchTable = async ({ queryKey }) => {
  const table = queryKey[0];
  const articleId = queryKey[1];

  const { data, error } = articleId
    ? await supabase
        .from(table)
        .select()
        .eq("id", articleId)
    : await supabase.from(table).select();

  if (error) {
    throw new Error(`requested fetch not ok`);
  }

  return data;
};

export default fetchTable;
