const MeaningList = ({ mean }) => {
  return (
    <div className="container m-7">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def, index) => {
            return (
              <div key={index}>
                <li className="arrow-list-item">{def.definition}</li>
              </div>
            );
          })
        )
      )}
    </div>
  );
};

export default MeaningList;
