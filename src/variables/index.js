const statuses = [
  { id: 1, text: "Open" },
  { id: 2, text: "Pending" },
  { id: 3, text: "Done" },
];

const getStatus = (id) => {
  const item = statuses.find((status) => status.id === id);
  return item?.text || "Not set";
};
export { statuses, getStatus };
