// utils/searchUtils.js
const searchData = (
  data: any[],
  searchTerm: string,
  searchableFields: string[]
) => {
  if (!searchTerm) return data;

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return data.filter((item) =>
    searchableFields.some((field) => {
      const fieldValue = getFieldValue(item, field); // Handle nested fields
      return String(fieldValue).toLowerCase().includes(lowerCaseSearchTerm);
    })
  );
};

// Helper function to get nested field values
const getFieldValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

export { searchData };
