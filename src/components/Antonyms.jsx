const Antonyms = ({ mean }) => {
  return (
    <div className="container m-7">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.antonyms.map((def, index) => {
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

export default Antonyms;
