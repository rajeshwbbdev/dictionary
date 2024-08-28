const Synonyms = ({ mean }) => {
  return (
    <div className="container m-7">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.synonyms.map((def, index) => {
            return (
              def && (
                <div key={index}>
                  <li className="arrow-list-item">{def}</li>
                </div>
              )
            );
          })
        )
      )}
    </div>
  );
};

export default Synonyms;
