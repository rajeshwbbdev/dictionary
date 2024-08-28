const Example = ({ mean }) => {
  return (
    <div className="container m-7">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def, index) => {
            return (
              def.example && (
                <div key={index}>
                  <li className="arrow-list-item">{def.example}</li>
                </div>
              )
            );
          })
        )
      )}
    </div>
  );
};

export default Example;
