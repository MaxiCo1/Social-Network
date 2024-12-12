const API_URL = "http://localhost:1338/api";

export const strapiGet = async <T>(
  endpoint: string,
  params?: URLSearchParams
): Promise<T> => {
  try {
    const res = await fetch(
      `${API_URL}${endpoint}${params ? `?${params}` : ""}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CMS_STRAPI_TOKEN}`, 
        },
      }
    );
    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Error: ${res.status}, ${JSON.stringify(error)}`);
    }
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
