export function Table({ head, data }) {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            {head.map((item) => {
              return <th key={item}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.desc}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
