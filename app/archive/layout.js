const layout = ({  archive, latest }) => {
  return (
    <div>
      <div id="archive-filter">{archive}</div>
      <div id="archive-latest">{latest}</div>|
    </div>
  );
};

export default layout;
